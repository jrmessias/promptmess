import { Link } from 'react-router-dom'
import LegalLayout from '@/components/LegalLayout'

function Privacy() {
  return (
    <LegalLayout title="Política de Privacidade" updatedAt="22 de junho de 2026">
      <p>
        Esta Política descreve como o <strong>promptmess</strong> coleta, utiliza e protege os dados
        pessoais dos usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
      </p>

      <section className="space-y-3">
        <h2>1. Dados que coletamos</h2>
        <ul>
          <li>
            <strong>Dados de cadastro:</strong> nome e e-mail informados na criação da conta;
          </li>
          <li>
            <strong>Dados de uso:</strong> prompts visualizados, buscas e interações na plataforma;
          </li>
          <li>
            <strong>Dados de pagamento:</strong> processados por provedores externos — não
            armazenamos os dados completos do seu cartão.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>2. Como usamos os dados</h2>
        <p>Utilizamos os dados para:</p>
        <ul>
          <li>Permitir o acesso à conta e aos prompts gratuitos e premium;</li>
          <li>Processar pagamentos e liberar o conteúdo premium adquirido;</li>
          <li>Melhorar a plataforma e personalizar a experiência;</li>
          <li>Enviar comunicações sobre o serviço, quando autorizado.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>3. Compartilhamento</h2>
        <p>
          Não vendemos seus dados pessoais. Podemos compartilhá-los com prestadores de serviço
          essenciais (como processadores de pagamento e provedores de infraestrutura), sempre nos
          limites necessários para a operação do serviço.
        </p>
      </section>

      <section className="space-y-3">
        <h2>4. Cookies</h2>
        <p>
          Utilizamos cookies e tecnologias semelhantes para manter sua sessão, lembrar preferências
          e medir o uso da plataforma. Você pode gerenciar os cookies nas configurações do seu
          navegador.
        </p>
      </section>

      <section className="space-y-3">
        <h2>5. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
          autorizado, perda ou alteração. Nenhum método de transmissão pela internet é 100% seguro,
          mas trabalhamos para mitigar riscos.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Seus direitos</h2>
        <p>
          Você pode solicitar a confirmação, o acesso, a correção, a portabilidade ou a exclusão dos
          seus dados, bem como revogar consentimentos. Para exercer esses direitos, entre em contato
          pelos nossos canais de atendimento.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Retenção</h2>
        <p>
          Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas nesta
          Política e as obrigações legais aplicáveis. Após esse período, os dados são excluídos ou
          anonimizados.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. Alterações</h2>
        <p>
          Esta Política pode ser atualizada periodicamente. Recomendamos a leitura regular. Consulte
          também nossos <Link to="/termos">Termos de Uso</Link>.
        </p>
      </section>

      <p className="text-xs opacity-70">
        Este documento é um modelo inicial e deve ser revisado por um profissional jurídico antes da
        publicação oficial.
      </p>
    </LegalLayout>
  )
}

export default Privacy
