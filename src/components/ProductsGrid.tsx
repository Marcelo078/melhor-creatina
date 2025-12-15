import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductsGrid = () => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/10 text-secondary font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Análises Completas
          </span>
          <h2 className="section-title text-foreground">
            Melhores <span className="text-secondary">Marcas de Creatina</span> 2025
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comparamos as principais marcas do mercado brasileiro. 
            <strong> Creatina monohidratada</strong> com <strong>melhores preços</strong> e <strong>melhor qualidade</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
