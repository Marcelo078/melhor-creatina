import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Award, Users, Heart } from "lucide-react";
import athleteMale from "@/assets/athlete-male.jpg";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Melhores Creatina - Portal de Suplementação</title>
        <meta name="description" content="Conheça o Melhores Creatina, o portal brasileiro dedicado a análises imparciais de creatina monohidratada. Nossa missão é ajudar você a fazer a melhor escolha." />
        <link rel="canonical" href="https://melhorescreatina.com.br/sobre" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-12 md:py-20">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="section-title text-foreground">
                Sobre o <span className="text-secondary">Melhores Creatina</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                O portal brasileiro dedicado a ajudar atletas e praticantes de musculação 
                a encontrar a <strong>melhor creatina</strong> para seus objetivos.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src={athleteMale} 
                  alt="Atleta usando creatina monohidratada" 
                  className="rounded-2xl shadow-hover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Nossa Missão
                </h2>
                <p className="text-muted-foreground">
                  No <strong>Melhores Creatina</strong>, acreditamos que todo atleta merece 
                  acesso a informações de qualidade sobre suplementação. Nossa equipe de 
                  especialistas analisa cada produto de forma imparcial, considerando:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-secondary" />
                    <span>Qualidade e pureza da creatina</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-secondary" />
                    <span>Reputação e certificações da marca</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-secondary" />
                    <span>Avaliações reais de consumidores</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-secondary" />
                    <span>Custo-benefício e acessibilidade</span>
                  </li>
                </ul>
              </div>
            </div>

            <section className="bg-muted rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Nosso Especialista
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-4xl">
                  MB
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Marcelo Barbosa
                  </h3>
                  <p className="text-secondary font-semibold mb-3">
                    Especialista em Suplementação Esportiva
                  </p>
                  <p className="text-muted-foreground">
                    Com mais de 10 anos de experiência em nutrição esportiva e suplementação, 
                    Marcelo é responsável por revisar todo o conteúdo do portal, garantindo 
                    informações precisas e atualizadas sobre <strong>creatina monohidratada</strong> 
                    e outros suplementos.
                  </p>
                </div>
              </div>
            </section>

            <section className="prose prose-lg max-w-none">
              <h2>Por Que Confiar no Melhores Creatina?</h2>
              <p>
                Diferente de outros sites, não somos patrocinados por nenhuma marca específica. 
                Nosso compromisso é com você, o consumidor. Analisamos produtos de forma 
                independente e transparente.
              </p>
              <p>
                Todos os links de compra são de afiliados, o que significa que podemos receber 
                uma pequena comissão por compras realizadas através do nosso site. Isso não 
                influencia nossas análises e ajuda a manter o portal funcionando.
              </p>
              <h2>Contato</h2>
              <p>
                Tem dúvidas ou sugestões? Entre em contato conosco através do email: 
                <a href="mailto:contato@melhorescreatina.com.br" className="text-secondary">
                  contato@melhorescreatina.com.br
                </a>
              </p>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;
