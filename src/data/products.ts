export interface Product {
  id: string;
  name: string;
  brand: string;
  weight: string;
  slug: string;
  description: string;
  benefits: string[];
  keywords: string[];
  affiliateLink: string;
  imageIndex: number;
}

export const AFFILIATE_LINK = "https://mercadolivre.com/sec/1e23ygz";

export const products: Product[] = [
  {
    id: "1",
    name: "Creatina Em Pó 300g Max Titanium Original",
    brand: "Max Titanium",
    weight: "300g",
    slug: "creatina-max-titanium-300g-original",
    description: "A **Creatina Max Titanium** é uma das mais vendidas do Brasil, reconhecida pela qualidade e pureza. Indicada para atletas que buscam **ganho de massa muscular**, **força explosiva** e **melhor recuperação** pós-treino.",
    benefits: ["Aumento de força", "Ganho de massa muscular", "Recuperação acelerada", "Alta pureza"],
    keywords: ["creatina max titanium", "melhor creatina", "creatina 300g", "suplemento força"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 0
  },
  {
    id: "2",
    name: "Creatina Hardcore 300g Integralmédica",
    brand: "Integralmédica",
    weight: "300g",
    slug: "creatina-hardcore-integralmedica-300g",
    description: "A **Creatina Hardcore Integralmédica** oferece creatina monohidratada de alta qualidade. Ideal para treinos intensos, ajuda no **aumento da resistência muscular** e na **explosão de força**.",
    benefits: ["Resistência muscular", "Explosão de força", "Qualidade premium", "Rápida absorção"],
    keywords: ["creatina integralmedica", "creatina hardcore", "melhor preço creatina", "suplemento academia"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 1
  },
  {
    id: "3",
    name: "Creatina Creatiny Monohidratada 300g Canibal Inc",
    brand: "Canibal Inc",
    weight: "300g",
    slug: "creatina-creatiny-canibal-inc-300g",
    description: "A **Creatina Creatiny da Canibal Inc** é 100% monohidratada e sem sabor. Perfeita para misturar com seu shake favorito e **potencializar seus treinos** de musculação.",
    benefits: ["100% monohidratada", "Sem sabor", "Fácil dissolução", "Custo-benefício"],
    keywords: ["creatina canibal", "creatina sem sabor", "creatina barata", "melhor oferta creatina"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 2
  },
  {
    id: "4",
    name: "Creatina Dux Nutrition 300gr Monohidratada Pura",
    brand: "Dux Nutrition",
    weight: "300g",
    slug: "creatina-dux-nutrition-300g-pura",
    description: "A **Creatina Dux Nutrition** é reconhecida por sua pureza excepcional. Com selo Creapure, garante **máxima qualidade** e **resultados comprovados** para atletas profissionais.",
    benefits: ["Selo Creapure", "Pureza máxima", "Marca premium", "Resultados comprovados"],
    keywords: ["creatina dux", "creatina creapure", "melhor marca creatina", "creatina premium"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 3
  },
  {
    id: "5",
    name: "Creatin Up 300g Nutrata",
    brand: "Nutrata",
    weight: "300g",
    slug: "creatina-creatin-up-nutrata-300g",
    description: "A **Creatin Up Nutrata** oferece excelente custo-benefício com qualidade garantida. Ajuda no **ganho de massa magra** e na **performance nos treinos**.",
    benefits: ["Custo-benefício", "Qualidade Nutrata", "Massa magra", "Performance"],
    keywords: ["creatina nutrata", "creatin up", "creatina boa e barata", "suplemento musculação"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 4
  },
  {
    id: "6",
    name: "Creatina Ocean Drop 300g",
    brand: "Ocean Drop",
    weight: "300g",
    slug: "creatina-ocean-drop-300g",
    description: "A **Creatina Ocean Drop** traz inovação com **fórmula exclusiva** para melhor absorção. Ideal para quem busca **resultados rápidos** e **qualidade diferenciada**.",
    benefits: ["Fórmula exclusiva", "Melhor absorção", "Resultados rápidos", "Alta qualidade"],
    keywords: ["creatina ocean drop", "creatina inovadora", "melhor absorção creatina", "creatina diferenciada"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 5
  },
  {
    id: "7",
    name: "Suplemento Universal Nutrition Creatine Mono 300g",
    brand: "Universal Nutrition",
    weight: "300g",
    slug: "creatina-universal-nutrition-300g",
    description: "A **Creatina Universal Nutrition** é referência mundial em suplementação. Com décadas de tradição, oferece **creatina pura** para **atletas de elite**.",
    benefits: ["Marca mundial", "Tradição", "Creatina pura", "Para atletas de elite"],
    keywords: ["creatina universal", "creatina importada", "melhor creatina mundo", "suplemento profissional"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 6
  },
  {
    id: "8",
    name: "Universal Nutrition Creatine Monohidratada 200g Kit X2",
    brand: "Universal Nutrition",
    weight: "400g (2x200g)",
    slug: "creatina-universal-nutrition-kit-2x200g",
    description: "O **Kit com 2 unidades da Universal Nutrition** é perfeito para quem quer garantir **estoque** e **economia**. Creatina de altíssima qualidade para treinos intensos.",
    benefits: ["Kit econômico", "2 unidades", "Estoque garantido", "Qualidade Universal"],
    keywords: ["kit creatina", "creatina promocao", "creatina 2 unidades", "melhor preço kit creatina"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 7
  },
  {
    id: "9",
    name: "Pré Treino 4b 300g Frutas Tropicais Nutrata",
    brand: "Nutrata",
    weight: "300g",
    slug: "pre-treino-4b-nutrata-frutas-tropicais",
    description: "O **Pré-Treino 4B Nutrata** combina energia e foco para **treinos explosivos**. Com sabor de frutas tropicais, é a escolha perfeita para **performance máxima**.",
    benefits: ["Energia explosiva", "Foco mental", "Sabor delicioso", "Pré-treino completo"],
    keywords: ["pre treino nutrata", "pre treino bom", "energia treino", "melhor pre treino"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 8
  },
  {
    id: "10",
    name: "Creatina Integralmedica 100% Pura 150g",
    brand: "Integralmédica",
    weight: "150g",
    slug: "creatina-integralmedica-150g-pura",
    description: "A **Creatina Integralmédica 150g** é perfeita para **iniciantes** ou para quem quer experimentar a qualidade da marca. **100% pura** e eficaz.",
    benefits: ["Ideal para iniciantes", "100% pura", "Tamanho compacto", "Qualidade Integralmédica"],
    keywords: ["creatina 150g", "creatina iniciante", "creatina pequena", "experimentar creatina"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 9
  },
  {
    id: "11",
    name: "Creatina Monohidratada 100% Pura 7 Potes 150g (1,05kg)",
    brand: "Diversos",
    weight: "1,05kg",
    slug: "creatina-kit-7-potes-1kg",
    description: "O **Super Kit com 7 potes** oferece **máxima economia** para quem treina sério. São 1,05kg de creatina pura para **meses de suplementação**.",
    benefits: ["Máxima economia", "7 potes", "1,05kg total", "Para treino sério"],
    keywords: ["kit creatina 7 potes", "creatina atacado", "creatina 1kg", "maior economia creatina"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 10
  },
  {
    id: "12",
    name: "Creatina Em Pó Ghmuscle 300g",
    brand: "GH Muscle",
    weight: "300g",
    slug: "creatina-ghmuscle-300g",
    description: "A **Creatina GH Muscle** é desenvolvida para **atletas exigentes**. Fórmula potente para **ganhos reais** de força e massa muscular.",
    benefits: ["Para atletas exigentes", "Fórmula potente", "Ganhos reais", "Qualidade GH"],
    keywords: ["creatina gh muscle", "creatina potente", "creatina atletas", "suplemento ganho massa"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 11
  },
  {
    id: "13",
    name: "Creatin Up Pouch Refil 300g Nutrata",
    brand: "Nutrata",
    weight: "300g",
    slug: "creatina-creatin-up-refil-nutrata",
    description: "O **Refil Creatin Up Nutrata** é a opção **econômica e sustentável**. Mesma qualidade, menos embalagem, **melhor preço**.",
    benefits: ["Opção econômica", "Sustentável", "Menos embalagem", "Mesmo rendimento"],
    keywords: ["creatina refil", "creatina economica", "creatina sustentavel", "nutrata refil"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 12
  },
  {
    id: "14",
    name: "Integralmedica Creatina Hardcore Pouch 1kg",
    brand: "Integralmédica",
    weight: "1kg",
    slug: "creatina-hardcore-integralmedica-1kg",
    description: "A **Creatina Hardcore 1kg** é para quem **leva treino a sério**. Pacote grande para **máximo rendimento** e economia a longo prazo.",
    benefits: ["Pacote grande", "1kg de creatina", "Máximo rendimento", "Economia longo prazo"],
    keywords: ["creatina 1kg", "creatina grande", "melhor custo beneficio", "creatina hardcore 1kg"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 13
  },
  {
    id: "15",
    name: "Melhor Creatina do Mercado Pura - Pure Suplementos",
    brand: "Pure",
    weight: "300g",
    slug: "melhor-creatina-mercado-pure",
    description: "A **Pure Suplementos** oferece uma das **creatinas mais puras** do mercado brasileiro. Qualidade certificada para **atletas profissionais**.",
    benefits: ["Pureza certificada", "Para profissionais", "Marca confiável", "Qualidade superior"],
    keywords: ["melhor creatina brasil", "creatina pura", "creatina pure", "top creatina"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 14
  },
  {
    id: "16",
    name: "Creatina Senior Good Vit Laranja 150g + HMB + Coenzima Q10",
    brand: "Good Vit",
    weight: "150g",
    slug: "creatina-senior-hmb-coenzima-q10",
    description: "A **Creatina Senior** é formulada especialmente para **público 50+**. Com HMB e Coenzima Q10, ajuda na **manutenção muscular** e **energia diária**.",
    benefits: ["Para público 50+", "Com HMB", "Coenzima Q10", "Energia diária"],
    keywords: ["creatina senior", "creatina idoso", "creatina hmb", "suplemento terceira idade"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 15
  },
  {
    id: "17",
    name: "Kit 2x Creatina 300g Max Titanium Monohidratada",
    brand: "Max Titanium",
    weight: "600g (2x300g)",
    slug: "kit-creatina-max-titanium-2x300g",
    description: "O **Kit Max Titanium** com 2 unidades garante **suplementação contínua** com a marca líder de vendas. **Economia e qualidade** garantidas.",
    benefits: ["Kit com 2 unidades", "Marca líder", "Economia garantida", "Suplementação contínua"],
    keywords: ["kit max titanium", "creatina kit", "2 creatinas", "promocao creatina"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 16
  },
  {
    id: "18",
    name: "Creatina Integralmedica 100% Pura 300g Alta Performance",
    brand: "Integralmédica",
    weight: "300g",
    slug: "creatina-integralmedica-300g-alta-performance",
    description: "A **Creatina Integralmédica 300g** é sinônimo de **alta performance**. Força, resistência e energia para **superar seus limites**.",
    benefits: ["Alta performance", "Força máxima", "Resistência", "Superar limites"],
    keywords: ["creatina performance", "creatina forca", "integralmedica 300g", "suplemento atleta"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 17
  },
  {
    id: "19",
    name: "Creatina 300gr Max Titanium Força Resistência",
    brand: "Max Titanium",
    weight: "300g",
    slug: "creatina-max-titanium-forca-resistencia",
    description: "A **Max Titanium 300g** combina **força e resistência** para treinos de alta intensidade. A escolha de milhares de atletas brasileiros.",
    benefits: ["Força e resistência", "Alta intensidade", "Escolha dos atletas", "Marca brasileira"],
    keywords: ["creatina brasileira", "max titanium qualidade", "creatina treino pesado", "forca muscular"],
    affiliateLink: AFFILIATE_LINK,
    imageIndex: 18
  }
];

export const affiliateProducts = [
  {
    name: "Fábrica de Comissões",
    author: "Deborah Oliveira",
    links: [
      "https://pay.kiwify.com.br/N3NYPE4?afid=P8U9TjQM",
      "https://kiwify.app/8Rj75xp?afid=P8U9TjQM"
    ],
    category: "Marketing Digital"
  },
  {
    name: "Shorts Virais",
    author: "Matheus Bolognesi Delalibera",
    links: [
      "https://pay.kiwify.com.br/NizgIAY?afid=HqmgdEky",
      "https://kiwify.app/obq34JI?afid=HqmgdEky"
    ],
    category: "Redes Sociais"
  },
  {
    name: "Influencer Milionário LEGACY",
    author: "TIO SAN PRODUCOES LTDA",
    links: [
      "https://kiwify.app/ge9QR3E?afid=alNgRff5",
      "https://pay.kiwify.com.br/gFQbHBB?afid=alNgRff5"
    ],
    category: "YouTube"
  },
  {
    name: "Método ADL - Comprando Antes do Leilão",
    author: "Pâmela Zelia Pan Toniolo",
    links: [
      "https://kiwify.app/itNNPGK?afid=sczZtkvA",
      "https://pay.kiwify.com.br/agsRolp?afid=sczZtkvA"
    ],
    category: "Investimentos"
  },
  {
    name: "700 Receitas Bolos, Tortas e Sobremesas",
    author: "Lucas Andrade",
    links: [
      "https://kiwify.app/Ae5oNZe?afid=eDWLErf4",
      "https://kiwify.app/u9RYKjS?afid=eDWLErf4"
    ],
    category: "Culinária"
  },
  {
    name: "Super Presell",
    author: "Nodz",
    links: ["https://kiwify.app/qeDlA3h?afid=6Kybii5i"],
    category: "Marketing Digital"
  },
  {
    name: "Academia da Riqueza Digital",
    author: "Ana Paula Noleto",
    links: ["https://kiwify.app/Xoqjz5T?afid=JbfKYymn"],
    category: "Marketing Digital"
  },
  {
    name: "Método Delivery de Sucesso",
    author: "Restaurante Comeria Ltda",
    links: ["https://kiwify.app/LPGXVer?afid=Eq7whBMe"],
    category: "Negócios"
  },
  {
    name: "Comunidade Milhas 3.0",
    author: "Silvino Toiti",
    links: [
      "https://kiwify.app/ixrSBze?afid=U2Uv4XK5",
      "https://kiwify.app/bXS0yyI?afid=U2Uv4XK5"
    ],
    category: "Viagens"
  }
];
