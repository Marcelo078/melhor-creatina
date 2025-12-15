import { Clock, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import athleteMale from "@/assets/athlete-male.jpg";
import athleteFemale from "@/assets/athlete-female.jpg";

const articles = [
  {
    title: "Creatina Monohidratada: O Guia Completo para Ganho de Massa Muscular em 2025",
    excerpt: "Descubra como a creatina monohidratada pode transformar seus treinos. Análise científica, dosagens corretas e as melhores marcas do mercado brasileiro.",
    image: athleteMale,
    author: "Marcelo Barbosa",
    readTime: "12 min",
    tags: ["Creatina", "Massa Muscular", "Suplementação"],
    slug: "creatina-monohidratada-guia-completo"
  },
  {
    title: "Top 10 Melhores Creatinas do Brasil: Comparativo de Marcas e Preços",
    excerpt: "Ranking atualizado das melhores creatinas disponíveis no Brasil. Comparamos Max Titanium, Integralmédica, Dux Nutrition e mais.",
    image: athleteFemale,
    author: "Marcelo Barbosa",
    readTime: "15 min",
    tags: ["Ranking", "Melhores Marcas", "Ofertas"],
    slug: "top-10-melhores-creatinas-brasil"
  },
  {
    title: "Como Tomar Creatina Corretamente: Dosagem, Horário e Ciclos",
    excerpt: "Aprenda a forma correta de suplementar com creatina para máximos resultados. Dicas de especialistas e protocolos comprovados.",
    image: athleteMale,
    author: "Marcelo Barbosa",
    readTime: "10 min",
    tags: ["Como Tomar", "Dosagem", "Protocolo"],
    slug: "como-tomar-creatina-corretamente"
  }
];

const ArticleSection = () => {
  return (
    <section id="artigos" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Conteúdo Exclusivo
          </span>
          <h2 className="section-title text-foreground">
            Artigos sobre <span className="text-primary">Creatina e Suplementação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conteúdo <strong>revisado por especialistas</strong> para você fazer as melhores escolhas.
            Informação de qualidade sobre <strong>creatina monohidratada</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="card-product group cursor-pointer"
              itemScope
              itemType="https://schema.org/Article"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
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

                <h3
                  className="font-display text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors"
                  itemProp="headline"
                >
                  {article.title}
                </h3>

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
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            Ver Todos os Artigos
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
