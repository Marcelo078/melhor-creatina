import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import ProductsGrid from "@/components/ProductsGrid";
import ArticleSection from "@/components/ArticleSection";
import AffiliateProducts from "@/components/AffiliateProducts";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Melhores Creatina",
    "description": "O portal definitivo sobre creatina monohidratada. Análises completas, comparativos de marcas e as melhores ofertas do Brasil.",
    "url": "https://melhorescreatina.com.br",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://melhorescreatina.com.br/busca?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qual a melhor creatina do Brasil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As melhores creatinas do Brasil incluem Max Titanium, Integralmédica, Dux Nutrition e Universal Nutrition. A escolha depende do seu orçamento e objetivos de treino."
        }
      },
      {
        "@type": "Question",
        "name": "Como tomar creatina corretamente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A dose recomendada de creatina é de 3 a 5 gramas por dia, podendo ser tomada a qualquer momento. Não é necessário fazer fase de saturação."
        }
      },
      {
        "@type": "Question",
        "name": "Creatina monohidratada engorda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A creatina pode causar retenção de água intramuscular, o que pode aumentar o peso corporal em 1-2kg. Isso não é gordura, mas sim água nos músculos."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Melhores Creatina 2025 | Comparativo de Marcas, Preços e Ofertas</title>
        <meta 
          name="description" 
          content="Descubra as melhores creatinas do Brasil em 2025. Análises completas de Max Titanium, Integralmédica, Dux e mais. Melhores preços e ofertas exclusivas." 
        />
        <meta name="keywords" content="melhores creatina, creatina monohidratada, melhor creatina brasil, creatina max titanium, creatina integralmedica, comprar creatina" />
        <meta name="author" content="Marcelo Barbosa" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://melhorescreatina.com.br" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Melhores Creatina 2025 | O Guia Definitivo" />
        <meta property="og:description" content="Descubra as melhores creatinas do Brasil. Análises imparciais, comparativos e ofertas exclusivas." />
        <meta property="og:url" content="https://melhorescreatina.com.br" />
        <meta property="og:site_name" content="Melhores Creatina" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Melhores Creatina 2025 | Guia Completo" />
        <meta name="twitter:description" content="As melhores creatinas do Brasil com análises e ofertas exclusivas." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ProductCarousel />
          <ProductsGrid />
          <ArticleSection />
          <AffiliateProducts />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
