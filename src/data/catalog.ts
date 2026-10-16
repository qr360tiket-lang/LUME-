export const WHATSAPP = "51986492712";
export const WHATSAPP_DISPLAY = "986 492 712";

export const CATS: Record<string, string> = {
  collares: "Collares",
  pulseras: "Pulseras",
  aretes: "Aretes",
  anillos: "Anillos",
  sets: "Sets",
};

export interface Product {
  id: number;
  name: string;
  cat: "collares" | "pulseras" | "aretes" | "anillos" | "sets";
  cats?: string[];
  price: number;
  art: string;
  tag?: string;
  measure?: string;
  desc: string;
  image: string;
  images: string[];
  details: string[];
}

export const PRODUCTS: Product[] = [
  // --- COLLARES ---
  {
    id: 1,
    name: "Collar Snake",
    cat: "collares",
    price: 49,
    art: "snake",
    tag: "Bestseller",
    measure: "40 cm + 6 cm extensor",
    desc: "Malla tubular flexible con caída líquida y brillo tipo espejo. Medida: 40 cm + 6 cm de extensor. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168330/aa.jpg",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168330/aa.jpg",
    ],
    details: [
      "Medida: 40 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: resistente a ducha, mar y piscina",
      "Hipoalergénico, apto para pieles sensibles",
    ],
  },
  {
    id: 6,
    name: "Collar Belle Chocker",
    cat: "collares",
    cats: ["collares", "sets"],
    price: 52,
    art: "snake",
    tag: "Tendencia",
    measure: "Gargantilla adaptable",
    desc: "Gargantilla rígida flexible con terminación pulida de alto impacto. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168603/Collar_dorado_con_detalle_de_pulsera.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168603/Collar_dorado_con_detalle_de_pulsera.png",
    ],
    details: [
      "Medida: gargantilla adaptable",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: resistente a ducha, mar y piscina",
      "Hipoalergénico, apto para pieles sensibles",
    ],
  },
  {
    id: 4,
    name: "Jhuliett",
    cat: "collares",
    price: 45,
    art: "heart",
    tag: "Nuevo",
    measure: "40 cm + 6 cm extensor",
    desc: "Diseño Jhuliett delicado y sofisticado con caída fina y brillo radiante. Medida: 40 cm + 6 cm de extensor. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028308/430efdcb-39cd-4ce0-959a-e7fac72ea220.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028308/430efdcb-39cd-4ce0-959a-e7fac72ea220.png",
    ],
    details: [
      "Medida: 40 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: resistente a ducha, mar y piscina",
      "Hipoalergénico, apto para pieles sensibles",
    ],
  },
  {
    id: 5,
    name: "Collar Cruz Gold",
    cat: "collares",
    price: 66,
    art: "cross",
    tag: "Exclusivo",
    measure: "45 cm + 6 cm extensor",
    desc: "Cruz pulida en cadena más amplia para layering perfecto. Medida: 45 cm + 6 cm de extensor. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028229/84da98e4-7af1-4e69-b96b-5914b4f43549.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028229/84da98e4-7af1-4e69-b96b-5914b4f43549.png",
    ],
    details: [
      "Medida: 45 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: resistente a ducha, mar y piscina",
      "Hipoalergénico, apto para pieles sensibles",
    ],
  },
  {
    id: 20,
    name: "Collar Lazos de Amor",
    cat: "collares",
    price: 65,
    art: "heart",
    tag: "Nuevo",
    desc: "Diseño refinado de lazos entrelazados con caída delicada y brillo dorado radiante. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028314/804de4e5-51b5-4aef-ad7b-2d55c57831b1.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028314/804de4e5-51b5-4aef-ad7b-2d55c57831b1.png",
    ],
    details: [
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: resistente a ducha, mar y piscina",
      "Hipoalergénico, apto para pieles sensibles",
      "Diseño exclusivo Lazos de Amor",
    ],
  },

  // --- PULSERAS ---
  {
    id: 9,
    name: "Pulsera Fine Beour",
    cat: "pulseras",
    price: 50,
    art: "chain",
    tag: "Destacado",
    measure: "16 cm + 6 cm extensor",
    desc: "Diseño refinado de eslabones pulidos con caída suave y cierre seguro. Medida: 16 cm + 6 cm de extensor. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030054/60beb4dd-aa17-4d7c-af7b-9de8dd3f0be4.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030054/60beb4dd-aa17-4d7c-af7b-9de8dd3f0be4.png",
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168432/gg.jpg",
    ],
    details: [
      "Medida: 16 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: resistente a ducha, mar y piscina",
      "Hipoalergénica, apta para pieles sensibles",
    ],
  },
  {
    id: 10,
    name: "Pulsera Choker",
    cat: "pulseras",
    price: 45,
    art: "chain",
    measure: "Estructura adaptable",
    desc: "Pulsera de estructura moderna combinable en set con el Collar Belle. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168757/Collar_y_pulsera_dorados_en_detalle.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168757/Collar_y_pulsera_dorados_en_detalle.png",
    ],
    details: [
      "Medida: estructura adaptable",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: resistente a ducha, mar y piscina",
      "Hipoalergénica, apta para pieles sensibles",
    ],
  },
  {
    id: 17,
    name: "Romantic Stile",
    cat: "pulseras",
    price: 54,
    art: "chain",
    tag: "Nuevo",
    desc: "Eslabones delicados con espíritu romántico y acabado dorado radiante. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168790/5.jpg",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168790/5.jpg",
    ],
    details: [
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: resistente a ducha, mar y piscina",
      "Hipoalergénica, apta para pieles sensibles",
      "Acabado pulido de alta duración",
    ],
  },
  {
    id: 18,
    name: "Eslabones de color",
    cat: "pulseras",
    price: 60,
    art: "chain",
    tag: "Nuevo",
    desc: "Cadena de eslabones dorados realzados con detalles de color sofisticados. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168843/7.jpg",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168843/7.jpg",
    ],
    details: [
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: no se despinta ni oxida",
      "Hipoalergénica, apta para pieles sensibles",
      "Diseño moderno y versátil",
    ],
  },

  // --- ARETES (En orden especificado por el usuario) ---
  {
    id: 11,
    name: "Aretes Mana",
    cat: "aretes",
    price: 35,
    art: "huggies",
    tag: "Favorito",
    measure: "1 – 1.2 cm",
    desc: "Argollitas clásicas de ajuste cómodo y brillo dorado cálido para uso 24/7. Medida: 1 – 1.2 cm (primer arete). Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168070/Oreja_con_aro_dorado.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168070/Oreja_con_aro_dorado.png",
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792067947/be0d6c81-8d00-4fb6-812a-a6644d460dfc.png",
    ],
    details: [
      "Medida: 1 – 1.2 cm (primer arete)",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: duérmete y báñate con ellos",
      "Hipoalergénicos, aptos para orejas sensibles",
    ],
  },
  {
    id: 12,
    name: "Aretes Finas Gold",
    cat: "aretes",
    price: 35,
    art: "bold",
    tag: "Bestseller",
    measure: "5.50 cm",
    desc: "Arracadas largas y estilizadas que aportan luz y elegancia al rostro. Medida: 5.50 cm. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792067947/9372f6cf-1c01-49ff-9a5e-51299e119a87.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792067947/9372f6cf-1c01-49ff-9a5e-51299e119a87.png",
    ],
    details: [
      "Medida: 5.50 cm",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: no pierden su color dorado",
      "Ligeros y confortables todo el día",
    ],
  },
  {
    id: 13,
    name: "Pack Aretes Petite",
    cat: "aretes",
    price: 65,
    art: "huggies",
    tag: "Pack x3",
    measure: "0.38 cm · 0.6 cm · 1.01 cm",
    desc: "Set de 3 pares de aretes minimalistas perfectos para múltiples perforaciones. Precio del pack S/ 65 (c/u S/ 25). Medidas: 0.38 cm · 0.6 cm · 1.01 cm. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030578/Tres_pares_de_aretes_dorados_elegantes.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030578/Tres_pares_de_aretes_dorados_elegantes.png",
    ],
    details: [
      "Contenido: Set de 3 pares (precio individual S/ 25 c/u)",
      "Medidas: 0.38 cm · 0.6 cm · 1.01 cm",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof e hipoalergénicos",
    ],
  },
  {
    id: 19,
    name: "Gala",
    cat: "aretes",
    price: 46,
    art: "bold",
    tag: "Nuevo",
    desc: "Aretes dorados de diseño fluido y presencia escultórica ideales para ocasiones especiales. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168948/443.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792168948/443.png",
    ],
    details: [
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: resistente a ducha y sudor",
      "Hipoalergénicos, aptos para pieles sensibles",
      "Diseño sofisticado para fiesta o gala",
    ],
  },

  // --- ANILLOS ---
  {
    id: 14,
    name: "Anillo Ondas",
    cat: "anillos",
    price: 43,
    art: "trio",
    tag: "Favorito",
    measure: "Regulable",
    desc: "Silueta ondulada moderna que envuelve el dedo con delicadeza. Medida: regulable. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030263/ec12ae98-cef8-4083-9d72-787f9389f1c9.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030263/ec12ae98-cef8-4083-9d72-787f9389f1c9.png",
    ],
    details: [
      "Medida: regulable (se adapta a tu dedo)",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles",
    ],
  },
  {
    id: 15,
    name: "Anillo Eterno",
    cat: "anillos",
    price: 45,
    art: "signet",
    tag: "Nuevo",
    measure: "Regulable",
    desc: "Banda continua dorada con acabado pulido y presencia sutil. Medida: regulable. Acero inoxidable 316L · Enchapado en Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030262/03b1a7e1-9f51-4498-8e50-61fd0c915e3d.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030262/03b1a7e1-9f51-4498-8e50-61fd0c915e3d.png",
    ],
    details: [
      "Medida: regulable (se adapta a tu dedo)",
      "Acero inoxidable 316L · Enchapado en Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles",
    ],
  },
];

export const FAQ = [
  [
    "¿De verdad puedo ducharme con mis joyas?",
    "Sí. Nuestras piezas son de acero 316L con enchapado en oro 18k PVD, por lo que resisten el agua, el sudor y el uso diario sin perder su color.",
  ],
  [
    "¿Son aptas para pieles sensibles?",
    "Sí, son 100% hipoalergénicas. El acero 316L con enchapado en oro 18k PVD es un material noble libre de níquel, especialmente formulado para ser amable con tu piel.",
  ],
  [
    "¿Cómo cuido mis joyas para que duren más?",
    "Sécalas después de nadar en piscinas o el mar, guárdalas por separado para evitar roces y evita químicos abrasivos. Gracias a la tecnología de enchapado en oro 18k PVD, mantendrán su brillo radiante.",
  ],
];

export const soles = (val: number): string => `S/ ${val}`;

export const waLink = (msg: string): string =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const SCENES: Record<string, { label: string; cap: string }> = {
  ducha: {
    label: "Ducha diaria",
    cap: "Agua tibia, jabón y champú. Tu joya mantiene su brillo dorado intacto todos los días.",
  },
  mar: {
    label: "Agua salada",
    cap: "Salitre, olas y sol. El acero 316L con enchapado en oro 18k PVD no se oxida ni pierde color en el mar.",
  },
  piscina: {
    label: "Piscina y cloro",
    cap: "El cloro no decolora el enchapado en oro 18k PVD. Nada sin preocuparte por tus piezas favoritas.",
  },
  gym: {
    label: "Sudor y entrenamiento",
    cap: "Entrena al máximo. El sudor no altera el tono dorado ni irrita tu piel.",
  },
};

export const art = (type: string, isModal?: boolean): string => {
  const sz = isModal ? 260 : 200;
  const goldGrad = `
    <defs>
      <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff5cc" />
        <stop offset="30%" stop-color="#d4af37" />
        <stop offset="60%" stop-color="#f5e6a3" />
        <stop offset="85%" stop-color="#aa8214" />
        <stop offset="100%" stop-color="#ffe680" />
      </linearGradient>
      <linearGradient id="goldSoft" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#9a7413" />
        <stop offset="50%" stop-color="#d4af37" />
        <stop offset="100%" stop-color="#fff8db" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  `;

  let inner = "";
  if (type === "huggies") {
    inner = `
      <ellipse cx="42" cy="50" rx="18" ry="24" fill="none" stroke="url(#goldShine)" stroke-width="8" stroke-linecap="round" />
      <ellipse cx="62" cy="52" rx="15" ry="20" fill="none" stroke="url(#goldSoft)" stroke-width="6.5" stroke-linecap="round" />
      <path class="tw" d="M38 32 L40 26 L42 32 L48 34 L42 36 L40 42 L38 36 L32 34 Z" fill="#fff" />
      <path class="tw d2" d="M68 62 L69 57 L71 62 L76 63 L71 65 L69 70 L68 65 L63 63 Z" fill="#ffe999" />
      <path class="tw d3" d="M52 20 L53 16 L54 20 L58 21 L54 22 L53 26 L52 22 L48 21 Z" fill="#fff" />
    `;
  } else if (type === "bold") {
    inner = `
      <path d="M50 20 C40 35 32 50 32 65 C32 80 40 88 50 88 C60 88 68 80 68 65 C68 50 60 35 50 20 Z" fill="url(#goldShine)" />
      <ellipse cx="46" cy="58" rx="8" ry="16" fill="url(#goldSoft)" opacity="0.6" />
      <path class="tw" d="M50 30 L52 25 L54 30 L59 32 L54 34 L52 39 L50 34 L45 32 Z" fill="#fff" />
      <path class="tw d2" d="M62 70 L63 66 L65 70 L69 71 L65 72 L63 76 L62 72 L58 71 Z" fill="#fff" />
    `;
  } else if (type === "cross") {
    inner = `
      <path d="M15 15 Q50 35 85 15" fill="none" stroke="url(#goldSoft)" stroke-width="2.5" />
      <rect x="47" y="32" width="6" height="48" rx="3" fill="url(#goldShine)" />
      <rect x="34" y="44" width="32" height="6" rx="3" fill="url(#goldShine)" />
      <circle cx="50" cy="47" r="2.5" fill="#fff" opacity="0.8" />
      <path class="tw" d="M50 32 L52 27 L54 32 L59 34 L54 36 L52 41 L50 36 L45 34 Z" fill="#fff" />
      <path class="tw d2" d="M65 47 L66 43 L68 47 L72 48 L68 49 L66 53 L65 49 L61 48 Z" fill="#fff" />
    `;
  } else if (type === "snake") {
    inner = `
      <path d="M20 28 C30 65 70 65 80 28" fill="none" stroke="url(#goldShine)" stroke-width="8" stroke-linecap="round" />
      <path d="M24 32 C33 60 67 60 76 32" fill="none" stroke="url(#goldSoft)" stroke-width="3" opacity="0.7" />
      <path class="tw" d="M50 64 L52 59 L54 64 L59 66 L54 68 L52 73 L50 68 L45 66 Z" fill="#fff" />
      <path class="tw d3" d="M30 40 L31 36 L33 40 L37 41 L33 42 L31 46 L30 42 L26 41 Z" fill="#fff" />
    `;
  } else if (type === "heart") {
    inner = `
      <path d="M15 20 Q50 42 85 20" fill="none" stroke="url(#goldSoft)" stroke-width="2.5" />
      <path d="M50 50 C45 35 25 38 25 54 C25 68 50 82 50 82 C50 82 75 68 75 54 C75 38 55 35 50 50 Z" fill="url(#goldShine)" />
      <path class="tw" d="M50 48 L52 43 L54 48 L59 50 L54 52 L52 57 L50 52 L45 50 Z" fill="#fff" />
      <path class="tw d2" d="M68 46 L69 42 L71 46 L75 47 L71 48 L69 52 L68 48 L64 47 Z" fill="#fff" />
    `;
  } else if (type === "trio" || type === "signet") {
    inner = `
      <ellipse cx="50" cy="50" rx="34" ry="22" fill="none" stroke="url(#goldShine)" stroke-width="8" />
      <ellipse cx="50" cy="50" rx="30" ry="18" fill="none" stroke="url(#goldSoft)" stroke-width="3" opacity="0.6" />
      <path class="tw" d="M72 40 L74 35 L76 40 L81 42 L76 44 L74 49 L72 44 L67 42 Z" fill="#fff" />
      <path class="tw d2" d="M30 52 L31 48 L33 52 L37 53 L33 54 L31 58 L30 54 L26 53 Z" fill="#fff" />
    `;
  } else {
    // Chain / default
    inner = `
      <path d="M18 50 C26 38 40 38 50 50 C60 62 74 62 82 50" fill="none" stroke="url(#goldShine)" stroke-width="7" stroke-linecap="round" stroke-dasharray="14 4" />
      <circle cx="50" cy="50" r="5" fill="url(#goldSoft)" />
      <path class="tw" d="M50 36 L52 31 L54 36 L59 38 L54 40 L52 45 L50 40 L45 38 Z" fill="#fff" />
      <path class="tw d2" d="M78 44 L79 40 L81 44 L85 45 L81 46 L79 50 L78 46 L74 45 Z" fill="#fff" />
    `;
  }

  return `<svg viewBox="0 0 100 100" width="${sz}" height="${sz}" style="width:100%;height:100%;overflow:visible;">${goldGrad}${inner}</svg>`;
};
