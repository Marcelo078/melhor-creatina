import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getArticleBySlug, articles } from "@/data/articles";
import { AFFILIATE_LINK } from "@/data/products";
import { Clock, User, Calendar, Tag, ArrowLeft, ArrowRight, ShoppingCart, Share2, BookOpen } from "lucide-react";
import athleteMale from "@/assets/athlete-male.jpg";
import athleteFemale from "@/assets/athlete-female.jpg";
import ReactMarkdown from "react-markdown";

const Artigo = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/artigos" replace />;
  }

  const currentIndex = articles.findIndex(a => a.slug === slug);
  const nextArticle = articles[currentIndex + 1] || articles[0];
  const prevArticle = articles[currentIndex - 1] || articles[articles.length - 1];
  const relatedArticles = articles.filter(a => a.slug !== slug).slice(0, 3);

  const articleImage = currentIndex % 2 === 0 ? athleteMale : athleteFemale;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Melhores Creatina"
    },
    "datePublished": article.publishDate,
    "dateModified": article.updateDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://melhorescreatina.com.br/artigos/${article.slug}`
    }
  };

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(", ")} />
        <meta name="author" content={article.author} />
        <link rel="canonical" href={`https://melhorescreatina.com.br/artigos/${article.slug}`} />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:url" content={`https://melhorescreatina.com.br/artigos/${article.slug}`} />
        <meta property="article:published_time" content={article.publishDate} />
        <meta property="article:modified_time" content={article.updateDate} />
        <meta property="article:author" content={article.author} />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero do Artigo */}
          <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
            <div className="absolute inset-0">
              <img
                src={articleImage}
                alt={article.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
            </div>
            
            <div className="container relative">
              <Link 
                to="/artigos" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para Artigos
              </Link>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map(tag => (
                  <span 
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs bg-secondary/20 text-secondary font-medium px-3 py-1 rounded-full"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight max-w-4xl mb-6">
                {article.title}
              </h1>

              <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{article.author}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readTime} de leitura
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Atualizado em {new Date(article.updateDate).toLocaleDateString('pt-BR')}
                </span>
              </div>
            </div>
          </section>

          {/* Conteúdo do Artigo */}
          <article className="container py-12 md:py-16">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Conteúdo Principal */}
              <div className="lg:col-span-8">
                <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-secondary prose-a:no-underline hover:prose-a:underline">
                  <ReactMarkdown>{article.content}</ReactMarkdown>
                </div>

                {/* CTA no final */}
                <div className="mt-12 p-8 bg-gradient-to-r from-primary to-primary/80 rounded-2xl text-primary-foreground">
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Pronto para Começar sua Suplementação?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Confira as <strong>melhores ofertas</strong> de creatina com os <strong>melhores preços</strong> do mercado.
                  </p>
                  <Button variant="cta" size="lg" asChild>
                    <a href={AFFILIATE_LINK} target="_blank" rel="noopener sponsored">
                      <ShoppingCart className="h-5 w-5" />
                      Ver Melhores Ofertas
                    </a>
                  </Button>
                </div>

                {/* Navegação entre artigos */}
                <div className="mt-12 grid md:grid-cols-2 gap-4">
                  <Link 
                    to={`/artigos/${prevArticle.slug}`}
                    className="p-4 border border-border rounded-xl hover:border-primary transition-colors group"
                  >
                    <span className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                      <ArrowLeft className="h-3 w-3" />
                      Artigo Anterior
                    </span>
                    <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {prevArticle.title}
                    </span>
                  </Link>
                  <Link 
                    to={`/artigos/${nextArticle.slug}`}
                    className="p-4 border border-border rounded-xl hover:border-primary transition-colors group text-right"
                  >
                    <span className="text-xs text-muted-foreground flex items-center gap-1 justify-end mb-2">
                      Próximo Artigo
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {nextArticle.title}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                  {/* Box de Compra */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5 text-secondary" />
                      Melhores Ofertas
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Encontre as <strong>melhores creatinas</strong> com os <strong>melhores preços</strong>.
                    </p>
                    <Button variant="buy" size="lg" className="w-full" asChild>
                      <a href={AFFILIATE_LINK} target="_blank" rel="noopener sponsored">
                        Comprar no Mercado Livre
                      </a>
                    </Button>
                  </div>

                  {/* Artigos Relacionados */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Leia Também
                    </h4>
                    <div className="space-y-4">
                      {relatedArticles.map(related => (
                        <Link
                          key={related.slug}
                          to={`/artigos/${related.slug}`}
                          className="block group"
                        >
                          <h5 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h5>
                          <span className="text-xs text-muted-foreground">
                            {related.readTime} de leitura
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Compartilhar */}
                  <div className="bg-muted rounded-xl p-6">
                    <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                      <Share2 className="h-5 w-5" />
                      Compartilhar
                    </h4>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://melhorescreatina.com.br/artigos/${article.slug}`)}`}
                          target="_blank"
                          rel="noopener"
                        >
                          Twitter
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://melhorescreatina.com.br/artigos/${article.slug}`)}`}
                          target="_blank"
                          rel="noopener"
                        >
                          Facebook
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${article.title} - https://melhorescreatina.com.br/artigos/${article.slug}`)}`}
                          target="_blank"
                          rel="noopener"
                        >
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Artigo;
