import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, AFFILIATE_LINK } from "@/data/products";
import productImage from "@/assets/product-creatine-1.jpg";

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="ofertas" className="py-16 bg-muted/50">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title text-foreground">
              <span className="text-secondary">Melhores Ofertas</span> em Creatina
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              As <strong>melhores marcas</strong> com os <strong>melhores preços</strong>. 
              Creatina monohidratada de qualidade comprovada.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.slice(0, 10).map((product, index) => (
            <div
              key={product.id}
              className="min-w-[300px] max-w-[300px] snap-start card-product"
            >
              <div className="relative">
                <img
                  src={productImage}
                  alt={`${product.name} - Melhores Preços Creatina`}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                {index < 3 && (
                  <div className="absolute top-3 left-3 badge-highlight">
                    #{index + 1} Mais Vendida
                  </div>
                )}
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-display font-bold text-foreground line-clamp-2 text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {product.brand} • {product.weight}
                </p>
                <div className="flex gap-2">
                  <Button variant="buy" size="sm" className="flex-1" asChild>
                    <a href={AFFILIATE_LINK} target="_blank" rel="noopener sponsored">
                      <ShoppingCart className="h-3.5 w-3.5" />
                      Comprar
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`#${product.slug}`}>
                      <Info className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
