-- promptmess — schema do Supabase
-- Rode este script no painel do Supabase: SQL Editor > New query > Run.

-- 1) Tabela de perfis (1:1 com auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  full_name text,
  is_premium boolean not null default false,
  created_at timestamptz not null default now()
);

-- 2) Row Level Security: cada usuário só enxerga/edita o próprio perfil
alter table public.profiles enable row level security;

drop policy if exists "Perfis: leitura do próprio" on public.profiles;
create policy "Perfis: leitura do próprio"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Perfis: atualização do próprio" on public.profiles;
create policy "Perfis: atualização do próprio"
  on public.profiles for update
  using (auth.uid() = id);

-- 3) Cria o perfil automaticamente quando um usuário se cadastra
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 4) Colunas de assinatura (Stripe)
alter table public.profiles add column if not exists stripe_customer_id text;
alter table public.profiles add column if not exists stripe_subscription_id text;
alter table public.profiles add column if not exists subscription_status text;
alter table public.profiles add column if not exists plan text;                       -- 'monthly' | 'annual'
alter table public.profiles add column if not exists subscription_started_at timestamptz;
alter table public.profiles add column if not exists subscription_ends_at timestamptz;

-- 5) Proteção: o cliente NÃO pode alterar is_premium nem colunas Stripe.
--    Revoga UPDATE amplo e concede apenas as colunas seguras.
--    O webhook usa a service role key, que ignora estes grants.
revoke update on public.profiles from authenticated, anon;
grant update (full_name) on public.profiles to authenticated;
