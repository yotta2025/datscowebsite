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
      { name: "Polyvinyl alcohol (fine power)", pdf: "/files/specs/construction/pva.pdf" },
      { name: "Polyvinyl alcohol fiber", pdf: "/files/specs/construction/PVAfiber.pdf" },
      { name: "Redispersible Emulsion Powder", pdf: "/files/specs/construction/emulsionpowder.pdf" },
      { name: " Hydroxypropyl Methylcellulose", pdf: "/files/specs/construction/HPMC.pdf" },
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
      { name: "EVA Resin", pdf: "/files/specs/adhesives/EVA.pdf" },
      { name: "White Emulsion", pdf: "/files/specs/adhesives/Emulsion.pdf" },
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
      { name: "Oil Well Cement Additives", pdf: "/files/specs/oil-gas/wellcement.pdf" },
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
      { name: "1,4 Butanediol", pdf: "/files/specs/polyurethane/bdo.pdf" },
      { name: "Tetrahydrofuran", pdf: "/files/specs/polyurethane/THF.pdf" },
      { name: "PTMEG", pdf: "/files/specs/polyurethane/PTMEG.pdf" },
    ],
  },
  {
    slug: "food additive",
    title: "Food Additive",
    short: "Chemical solutions for food processing and additives.",
    image: "/images/products/food.png",
    intro:
      "Chemical solutions for food processing and additives.",
    products: [
      { name: "Sodium Acetate", pdf: "/files/specs/food/sodiumacetate.pdf" },
      { name: "Citric Acid", pdf: "/files/specs/food/citirc.pdf" },
      { name: "Sodium Diacetate", pdf: "/files/specs/food/diacetate.pdf" },
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