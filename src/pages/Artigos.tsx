import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Clock, User, ArrowRight, Tag, Calendar } from "lucide-react";
import athleteMale from "@/assets/athlete-male.jpg";
import athleteFemale from "@/assets/athlete-female.jpg";

const Artigos = () => {
  return (
    <>
      <Helmet>
        <title>Artigos sobre Creatina e Suplementação | Melhores Creatina</title>
        <meta 
          name="description" 
          content="Artigos completos sobre creatina monohidratada, suplementação esportiva, como tomar, melhores marcas e dicas para ganho de massa muscular." 
        />
        <meta name="keywords" content="artigos creatina, guia creatina, como tomar creatina, suplementação esportiva" />
        <link rel="canonical" href="https://melhorescreatina.com.br/artigos" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero */}
          <section className="bg-primary text-primary-foreground py-16 md:py-20">
            <div className="container text-center">
              <span className="inline-block bg-secondary/20 text-secondary font-semibold text-sm px-4 py-2 rounded-full mb-4">
                Conteúdo Exclusivo
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-black mb-6">
                Artigos sobre <span className="text-secondary">Creatina</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Conteúdo <strong>revisado por especialistas</strong> para você fazer as melhores escolhas 
                em suplementação esportiva.
              </p>
            </div>
          </section>

          {/* Lista de Artigos */}
          <section className="container py-12 md:py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={article.slug}
                  className="card-product group"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <Link to={`/artigos/${article.slug}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={index % 2 === 0 ? athleteMale : athleteFemale}
                        alt={article.title}
                        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                        itemProp="image"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-xs bg-secondary/10 text-secondary font-medium px-2 py-1 rounded-full"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2
                        className="font-display text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors"
                        itemProp="headline"
                      >
                        {article.title}
                      </h2>

                      <p
                        className="text-muted-foreground line-clamp-3"
                        itemProp="description"
                      >
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span itemProp="author">{article.author}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      <Button variant="ghost" className="w-full group/btn">
                        Ler Artigo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Artigos;
