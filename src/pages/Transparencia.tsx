import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, DollarSign, FileCheck, Shield } from "lucide-react";

const Transparencia = () => {
  return (
    <>
      <Helmet>
        <title>Transparência e Isenção de Responsabilidade | Melhores Creatina</title>
        <meta name="description" content="Transparência sobre nosso modelo de negócio, links de afiliados e isenção de responsabilidade do Melhores Creatina." />
        <link rel="canonical" href="https://melhorescreatina.com.br/transparencia" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-12 md:py-20">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="section-title text-foreground">
                Transparência e <span className="text-accent">Isenção de Responsabilidade</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Acreditamos na transparência total com nossos leitores. Aqui explicamos 
                como nosso site funciona e como ganhamos dinheiro.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <DollarSign className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Como Ganhamos Dinheiro
                </h3>
                <p className="text-muted-foreground">
                  Nosso site é monetizado através de links de afiliados. Quando você clica 
                  em um link e realiza uma compra, recebemos uma pequena comissão.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Análises Imparciais
                </h3>
                <p className="text-muted-foreground">
                  Não somos patrocinados por nenhuma marca. Nossas análises são baseadas 
                  em pesquisas independentes e feedback real de consumidores.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <FileCheck className="h-10 w-10 text-secondary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Conteúdo Revisado
                </h3>
                <p className="text-muted-foreground">
                  Todo nosso conteúdo é revisado por <strong>Marcelo Barbosa</strong>, 
                  especialista em suplementação esportiva, garantindo precisão e qualidade.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <AlertTriangle className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Não é Conselho Médico
                </h3>
                <p className="text-muted-foreground">
                  O conteúdo deste site é informativo. Consulte sempre um médico ou 
                  nutricionista antes de iniciar qualquer suplementação.
                </p>
              </div>
            </div>

            <section className="prose prose-lg max-w-none">
              <h2>Declaração de Afiliados</h2>
              <p>
                O <strong>Melhores Creatina</strong> é um participante dos seguintes 
                programas de afiliados:
              </p>
              <ul>
                <li>
                  <strong>Mercado Livre:</strong> Somos afiliados do programa Mercado Livre 
                  Partners. Links para produtos no Mercado Livre podem gerar comissões para nós.
                </li>
                <li>
                  <strong>Kiwify:</strong> Promovemos produtos digitais através da plataforma 
                  Kiwify e recebemos comissões por vendas realizadas.
                </li>
              </ul>

              <h2>Como Identificar Links de Afiliados</h2>
              <p>
                Todos os botões de "Comprar" e links para produtos externos são links de 
                afiliados. Quando você clica e compra, o preço é o mesmo para você, mas 
                recebemos uma pequena comissão.
              </p>

              <h2>Isenção de Responsabilidade sobre Produtos</h2>
              <p>
                <strong>Não vendemos produtos diretamente.</strong> Somos apenas um portal 
                de informações e análises. As compras são realizadas diretamente nos sites 
                de terceiros (Mercado Livre, lojas oficiais, etc.).
              </p>
              <p>
                Não nos responsabilizamos por:
              </p>
              <ul>
                <li>Qualidade ou autenticidade dos produtos vendidos por terceiros</li>
                <li>Entregas, trocas ou devoluções</li>
                <li>Efeitos colaterais ou reações a suplementos</li>
                <li>Alterações de preços ou disponibilidade</li>
              </ul>

              <h2>Isenção de Responsabilidade Médica</h2>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-6">
                <p className="text-foreground font-semibold mb-2">
                  ⚠️ AVISO IMPORTANTE
                </p>
                <p className="text-muted-foreground mb-0">
                  Este site não oferece aconselhamento médico. O conteúdo é apenas 
                  informativo. Antes de usar qualquer suplemento, incluindo creatina, 
                  consulte um médico ou nutricionista qualificado. Suplementação 
                  inadequada pode causar efeitos adversos à saúde.
                </p>
              </div>

              <h2>Preços e Disponibilidade</h2>
              <p>
                Os preços e disponibilidade dos produtos podem variar. Não garantimos 
                que os preços exibidos estejam atualizados. Verifique sempre o preço 
                final antes de concluir a compra.
              </p>

              <h2>Contato</h2>
              <p>
                Se você tiver dúvidas sobre nossa política de transparência, entre em contato:
                <a href="mailto:contato@melhorescreatina.com.br"> contato@melhorescreatina.com.br</a>
              </p>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Transparencia;
