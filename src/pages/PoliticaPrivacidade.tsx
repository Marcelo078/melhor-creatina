import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Melhores Creatina</title>
        <meta name="description" content="Política de Privacidade do site Melhores Creatina. Saiba como tratamos seus dados pessoais." />
        <link rel="canonical" href="https://melhorescreatina.com.br/politica-privacidade" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-12 md:py-20">
          <article className="max-w-4xl mx-auto prose prose-lg">
            <h1>Política de Privacidade</h1>
            <p className="lead">
              A sua privacidade é importante para nós. Esta política explica como coletamos, 
              usamos e protegemos suas informações pessoais.
            </p>

            <p><strong>Última atualização:</strong> Dezembro de 2025</p>

            <h2>1. Informações que Coletamos</h2>
            <p>
              Podemos coletar as seguintes informações quando você visita o 
              <strong> Melhores Creatina</strong>:
            </p>
            <ul>
              <li>Informações de navegação (páginas visitadas, tempo de permanência)</li>
              <li>Dados técnicos (tipo de navegador, sistema operacional, endereço IP)</li>
              <li>Informações fornecidas voluntariamente (nome, email em formulários)</li>
            </ul>

            <h2>2. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações para:</p>
            <ul>
              <li>Melhorar a experiência do usuário no site</li>
              <li>Enviar newsletters (apenas se você se inscrever)</li>
              <li>Analisar o desempenho do site</li>
              <li>Personalizar conteúdo e recomendações</li>
            </ul>

            <h2>3. Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul>
              <li>Lembrar suas preferências</li>
              <li>Analisar tráfego através do Google Analytics</li>
              <li>Exibir anúncios relevantes</li>
              <li>Rastrear conversões de afiliados</li>
            </ul>
            <p>
              Você pode gerenciar suas preferências de cookies através das configurações 
              do seu navegador.
            </p>

            <h2>4. Links de Afiliados</h2>
            <p>
              Este site contém links de afiliados para produtos de terceiros, principalmente 
              do Mercado Livre e Kiwify. Quando você clica nesses links e realiza uma compra, 
              podemos receber uma comissão. Isso não afeta o preço que você paga.
            </p>

            <h2>5. Compartilhamento de Dados</h2>
            <p>
              Não vendemos suas informações pessoais. Podemos compartilhar dados com:
            </p>
            <ul>
              <li>Provedores de serviços (hospedagem, analytics)</li>
              <li>Parceiros de publicidade</li>
              <li>Quando exigido por lei</li>
            </ul>

            <h2>6. Segurança</h2>
            <p>
              Implementamos medidas de segurança para proteger suas informações, incluindo 
              criptografia SSL e práticas de segurança de dados.
            </p>

            <h2>7. Seus Direitos</h2>
            <p>
              De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
            </p>
            <ul>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incorretos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimento</li>
            </ul>

            <h2>8. Contato</h2>
            <p>
              Para questões sobre privacidade, entre em contato: 
              <a href="mailto:contato@melhorescreatina.com.br"> contato@melhorescreatina.com.br</a>
            </p>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
