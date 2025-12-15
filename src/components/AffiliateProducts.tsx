import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { affiliateProducts } from "@/data/products";

const AffiliateProducts = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="inline h-4 w-4 mr-1" />
            Recomendações Especiais
          </span>
          <h2 className="section-title text-foreground">
            Cursos e Produtos <span className="text-accent">Recomendados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os melhores cursos digitais para você transformar sua vida.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiliateProducts.map((product) => (
            <div
              key={product.name}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                por {product.author}
              </p>
              <Button variant="accent" size="sm" className="w-full" asChild>
                <a
                  href={product.links[0]}
                  target="_blank"
                  rel="noopener sponsored"
                >
                  Conhecer Produto
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateProducts;
