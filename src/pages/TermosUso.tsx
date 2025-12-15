import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosUso = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Melhores Creatina</title>
        <meta name="description" content="Termos de Uso do site Melhores Creatina. Leia atentamente antes de utilizar nossos serviços." />
        <link rel="canonical" href="https://melhorescreatina.com.br/termos-uso" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-12 md:py-20">
          <article className="max-w-4xl mx-auto prose prose-lg">
            <h1>Termos de Uso</h1>
            <p className="lead">
              Ao acessar o site <strong>Melhores Creatina</strong>, você concorda com os 
              termos e condições descritos abaixo.
            </p>

            <p><strong>Última atualização:</strong> Dezembro de 2025</p>

            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao utilizar este site, você declara ter lido, compreendido e concordado com 
              estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
              não utilize nosso site.
            </p>

            <h2>2. Natureza do Conteúdo</h2>
            <p>
              O <strong>Melhores Creatina</strong> é um portal informativo sobre suplementos 
              esportivos, especificamente creatina monohidratada. O conteúdo é:
            </p>
            <ul>
              <li>Destinado apenas a fins informativos e educacionais</li>
              <li>Não substitui orientação médica ou nutricional profissional</li>
              <li>Baseado em pesquisas e análises independentes</li>
            </ul>

            <h2>3. Links de Afiliados</h2>
            <p>
              Este site participa de programas de afiliados, incluindo:
            </p>
            <ul>
              <li>Programa de Afiliados Mercado Livre</li>
              <li>Kiwify</li>
            </ul>
            <p>
              Quando você clica em um link de afiliado e realiza uma compra, podemos receber 
              uma comissão. Isso não aumenta o preço do produto para você e ajuda a manter 
              o funcionamento do site.
            </p>

            <h2>4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do site, incluindo textos, imagens, logotipos e design, é 
              protegido por direitos autorais. É proibido:
            </p>
            <ul>
              <li>Copiar ou reproduzir conteúdo sem autorização</li>
              <li>Usar a marca "Melhores Creatina" sem permissão</li>
              <li>Modificar ou criar obras derivadas</li>
            </ul>

            <h2>5. Limitação de Responsabilidade</h2>
            <p>
              O <strong>Melhores Creatina</strong> não se responsabiliza por:
            </p>
            <ul>
              <li>Decisões de compra baseadas em nosso conteúdo</li>
              <li>Efeitos adversos de produtos recomendados</li>
              <li>Conteúdo de sites de terceiros (links externos)</li>
              <li>Indisponibilidade temporária do site</li>
            </ul>

            <h2>6. Isenção de Responsabilidade Médica</h2>
            <p>
              <strong>IMPORTANTE:</strong> O conteúdo deste site não substitui a orientação 
              de um médico ou nutricionista. Antes de iniciar qualquer suplementação, 
              consulte um profissional de saúde qualificado.
            </p>

            <h2>7. Conduta do Usuário</h2>
            <p>Ao utilizar nosso site, você concorda em:</p>
            <ul>
              <li>Não violar leis ou regulamentos</li>
              <li>Não tentar acessar áreas restritas do site</li>
              <li>Não usar bots ou scripts automatizados</li>
              <li>Não difamar ou caluniar o site ou terceiros</li>
            </ul>

            <h2>8. Modificações</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
              As alterações entram em vigor imediatamente após a publicação.
            </p>

            <h2>9. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso são regidos pela legislação brasileira. Quaisquer disputas 
              serão resolvidas nos tribunais competentes do Brasil.
            </p>

            <h2>10. Contato</h2>
            <p>
              Para dúvidas sobre estes termos: 
              <a href="mailto:contato@melhorescreatina.com.br"> contato@melhorescreatina.com.br</a>
            </p>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermosUso;
