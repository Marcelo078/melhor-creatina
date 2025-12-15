import { Dumbbell, Mail, Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                <Dumbbell className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight">
                  Melhores
                </span>
                <span className="font-display text-lg font-extrabold leading-tight text-secondary">
                  Creatina
                </span>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              O portal definitivo sobre <strong>creatina monohidratada</strong>. 
              Análises imparciais, comparativos de marcas e as melhores ofertas do Brasil.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-secondary hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-secondary hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-secondary hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="/" className="hover:text-secondary transition-colors">Início</a></li>
              <li><a href="/#produtos" className="hover:text-secondary transition-colors">Produtos</a></li>
              <li><a href="/#artigos" className="hover:text-secondary transition-colors">Artigos</a></li>
              <li><a href="/#ofertas" className="hover:text-secondary transition-colors">Ofertas</a></li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/sobre" className="hover:text-secondary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/politica-privacidade" className="hover:text-secondary transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/termos-uso" className="hover:text-secondary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/transparencia" className="hover:text-secondary transition-colors">Transparência</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-background/70">
              <a href="mailto:contato@melhorescreatina.com.br" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                contato@melhorescreatina.com.br
              </a>
            </div>
            <div className="mt-4 p-4 bg-background/5 rounded-lg border border-background/10">
              <p className="text-xs text-background/60">
                <strong>Aviso:</strong> Este site contém links de afiliados. 
                Podemos receber comissão por compras realizadas através dos links.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © {currentYear} Melhores Creatina. Todos os direitos reservados.
            </p>
            <p>
              Revisado por <strong className="text-secondary">Marcelo Barbosa</strong> | Especialista em Suplementação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
