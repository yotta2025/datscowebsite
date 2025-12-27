export type ProductItem = {
  name: string;
  description?: string;
  pdf: string; // /files/specs/...pdf
};

export type ProductCategory = {
  slug: string;      // /products/{slug}
  title: string;
  short: string;     // 卡片一句话
  image: string;     // /images/products/xxx.png
  intro: string;     // 分类页说明
  products: ProductItem[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "construction",
    title: "Construction Materials",
    short: "Used in cement, concrete, and infrastructure projects.",
    image: "/images/products/construction.png",
    intro:
      "Cement additives, admixtures, and related materials to enhance concrete performance for infrastructure and construction projects.",
    products: [
      { name: "Superplasticizer (PCE)", pdf: "/files/specs/construction/superplasticizer-pce.pdf" },
      { name: "Retarder", pdf: "/files/specs/construction/retarder.pdf" },
    ],
  },
  {
    slug: "industrial",
    title: "Industrial Chemicals & Solvents",
    short: "For manufacturing, processing, and surface treatment.",
    image: "/images/products/industrial.png",
    intro:
      "Industrial chemicals and solvents for processing, cleaning, and surface treatment applications.",
    products: [
      { name: "IPA (Isopropyl Alcohol)", pdf: "/files/specs/industrial/ipa.pdf" },
      { name: "MEK", pdf: "/files/specs/industrial/mek.pdf" },
    ],
  },
  {
    slug: "adhesives",
    title: "Adhesives",
    short: "Raw materials for industrial and construction adhesives.",
    image: "/images/products/adhesives.png",
    intro:
      "Raw materials and intermediates used in industrial and construction adhesive systems.",
    products: [
      { name: "Adhesive Resin", pdf: "/files/specs/adhesives/resin.pdf" },
    ],
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas (Cement Additives)",
    short: "Solutions for upstream and downstream applications.",
    image: "/images/products/oil-gas.png",
    intro:
      "Cementing additives and solutions for oil & gas operations and related applications.",
    products: [
      { name: "Defoamer", pdf: "/files/specs/oil-gas/defoamer.pdf" },
    ],
  },
  {
    slug: "polyurethane",
    title: "Polyurethane",
    short: "Raw materials for PU foams, coatings, and elastomers.",
    image: "/images/products/polyurethane.png",
    intro:
      "Raw materials for PU foams, coatings, elastomers, and related polyurethane applications.",
    products: [
      { name: "Polyol", pdf: "/files/specs/polyurethane/polyol.pdf" },
      { name: "MDI", pdf: "/files/specs/polyurethane/mdi.pdf" },
    ],
  },
  {
    slug: "textile",
    title: "Textile Industry",
    short: "Chemical solutions for textile manufacturing and finishing.",
    image: "/images/products/textile.png",
    intro:
      "Chemical solutions and auxiliaries for textile manufacturing and finishing processes.",
    products: [
      { name: "Softener", pdf: "/files/specs/textile/softener.pdf" },
    ],
  },
  {
    slug: "pharmacy",
    title: "Pharmacy Industry",
    short: "High-purity chemicals and intermediates for pharma production.",
    image: "/images/products/pharmacy.png",
    intro:
      "High-purity chemicals and intermediates for pharmaceutical production.",
    products: [
      { name: "Intermediate A", pdf: "/files/specs/pharmacy/intermediate-a.pdf" },
    ],
  },
  {
    slug: "water",
    title: "Water Treatment Industry",
    short: "Chemicals and additives for clean water and wastewater treatment.",
    image: "/images/products/water.png",
    intro:
      "Chemicals and additives for clean water and wastewater treatment applications.",
    products: [
      { name: "Flocculant", pdf: "/files/specs/water/flocculant.pdf" },
      { name: "PAC", pdf: "/files/specs/water/pac.pdf" },
    ],
  },
];