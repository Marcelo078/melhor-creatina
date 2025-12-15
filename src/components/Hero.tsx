import { ArrowRight, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Academia com atletas treinando - Melhores Creatinas do Brasil"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-secondary fill-secondary" />
              <span className="text-sm font-semibold">Portal #1 de Suplementos</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Descubra as{" "}
              <span className="text-secondary">Melhores Creatinas</span> do Brasil
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              Análises completas, comparativos de marcas e as <strong>melhores ofertas</strong> em creatina monohidratada. 
              Revisado por especialistas para você fazer a <strong>melhor escolha</strong>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="xl" asChild>
                <a href="#produtos">
                  Ver Melhores Ofertas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <a href="#artigos">
                  Ler Artigos
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Análises Imparciais</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Atualizado 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-secondary fill-secondary" />
                <span className="text-sm font-medium">+50 Produtos Analisados</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { number: "19+", label: "Marcas Avaliadas" },
              { number: "100%", label: "Creatina Pura" },
              { number: "5★", label: "Avaliações" },
              { number: "24h", label: "Ofertas Atualizadas" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-3xl md:text-4xl font-black text-secondary">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-primary-foreground/80 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
