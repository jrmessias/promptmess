import { Link } from 'react-router-dom'
import LegalLayout from '@/components/LegalLayout'

function Terms() {
  return (
    <LegalLayout title="Termos de Uso" updatedAt="22 de junho de 2026">
      <p>
        Bem-vindo ao <strong>promptmess</strong>. Ao acessar ou utilizar nossa plataforma, você
        concorda com estes Termos de Uso. Leia-os com atenção. Caso não concorde com qualquer
        parte, recomendamos que não utilize o serviço.
      </p>

      <section className="space-y-3">
        <h2>1. Aceitação dos termos</h2>
        <p>
          Estes Termos regem o uso do promptmess, uma galeria de prompts para geração de imagens
          com inteligência artificial. Ao criar uma conta ou utilizar a plataforma, você declara ter
          capacidade legal para aceitar estes Termos.
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Conta de usuário</h2>
        <p>
          Algumas funcionalidades exigem a criação de uma conta. Você é responsável por manter a
          confidencialidade de suas credenciais e por todas as atividades realizadas na sua conta.
          Informe-nos imediatamente em caso de uso não autorizado.
        </p>
      </section>

      <section className="space-y-3">
        <h2>3. Prompts gratuitos e premium</h2>
        <p>
          Parte do conteúdo é disponibilizada gratuitamente e parte é classificada como
          <strong> premium</strong>. O conteúdo premium pode exigir pagamento ou assinatura para ser
          desbloqueado. Os valores, formas de pagamento e condições aplicáveis são informados no
          momento da contratação.
        </p>
      </section>

      <section className="space-y-3">
        <h2>4. Uso permitido</h2>
        <p>Você concorda em não:</p>
        <ul>
          <li>Copiar, revender ou redistribuir o conteúdo premium sem autorização;</li>
          <li>Utilizar a plataforma para fins ilegais ou que violem direitos de terceiros;</li>
          <li>Tentar burlar mecanismos de acesso, segurança ou pagamento;</li>
          <li>Realizar engenharia reversa ou extração automatizada em massa do conteúdo.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>5. Propriedade intelectual</h2>
        <p>
          A marca, o layout e os textos dos prompts são protegidos por direitos de propriedade
          intelectual. O acesso a um prompt premium concede a você uma licença de uso pessoal, não
          exclusiva e intransferível, salvo disposição em contrário.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Conteúdo gerado por IA</h2>
        <p>
          As imagens geradas a partir dos prompts são produzidas por ferramentas de terceiros
          (como Midjourney, DALL·E e outras). O promptmess não se responsabiliza pelos resultados
          gerados nem pelas políticas dessas ferramentas.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Limitação de responsabilidade</h2>
        <p>
          A plataforma é fornecida “no estado em que se encontra”. Na máxima extensão permitida pela
          lei, o promptmess não será responsável por danos indiretos decorrentes do uso ou da
          impossibilidade de uso do serviço.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. Alterações</h2>
        <p>
          Podemos atualizar estes Termos periodicamente. Alterações relevantes serão comunicadas na
          plataforma. O uso continuado após as mudanças representa sua concordância com a versão
          atualizada.
        </p>
      </section>

      <section className="space-y-3">
        <h2>9. Contato</h2>
        <p>
          Dúvidas sobre estes Termos podem ser enviadas pelos nossos canais de atendimento. Consulte
          também nossa{' '}
          <Link to="/privacidade">Política de Privacidade</Link>.
        </p>
      </section>

      <p className="text-xs opacity-70">
        Este documento é um modelo inicial e deve ser revisado por um profissional jurídico antes da
        publicação oficial.
      </p>
    </LegalLayout>
  )
}

export default Terms
