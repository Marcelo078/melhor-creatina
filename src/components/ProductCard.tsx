import { ExternalLink, ShoppingCart, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";
import productImage from "@/assets/product-creatine-1.jpg";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <article 
      className="card-product group"
      itemScope 
      itemType="https://schema.org/Product"
    >
      <div className="relative overflow-hidden">
        <img
          src={productImage}
          alt={`${product.name} - Creatina Monohidratada - Melhores Preços`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          itemProp="image"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {index < 3 && (
            <Badge className="bg-accent text-accent-foreground font-bold">
              TOP {index + 1}
            </Badge>
          )}
          <Badge variant="secondary" className="font-semibold">
            {product.brand}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3.5 w-3.5 text-accent fill-accent" />
            <span className="text-xs font-bold">4.8</span>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 
            className="font-display text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors"
            itemProp="name"
          >
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1" itemProp="weight">
            {product.weight}
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          {product.benefits.slice(0, 3).map((benefit) => (
            <span
              key={benefit}
              className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full"
            >
              <Check className="h-3 w-3 text-secondary" />
              {benefit}
            </span>
          ))}
        </div>

        <p 
          className="text-sm text-muted-foreground line-clamp-2"
          itemProp="description"
          dangerouslySetInnerHTML={{ 
            __html: product.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').slice(0, 120) + '...'
          }}
        />

        <div className="flex gap-2 pt-2">
          <Button variant="buy" size="default" className="flex-1" asChild>
            <a 
              href={product.affiliateLink} 
              target="_blank" 
              rel="noopener sponsored"
              aria-label={`Comprar ${product.name} no Mercado Livre`}
            >
              <ShoppingCart className="h-4 w-4" />
              Comprar
            </a>
          </Button>
          <Button variant="outline" size="default" asChild>
            <a href={`#${product.slug}`}>
              <ExternalLink className="h-4 w-4" />
              Detalhes
            </a>
          </Button>
        </div>
      </div>

      {/* Hidden structured data */}
      <meta itemProp="brand" content={product.brand} />
      <div itemProp="offers" itemScope itemType="https://schema.org/Offer" className="hidden">
        <meta itemProp="availability" content="https://schema.org/InStock" />
        <meta itemProp="url" content={product.affiliateLink} />
      </div>
    </article>
  );
};

export default ProductCard;
