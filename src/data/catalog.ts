export const WHATSAPP = "51999999999";

export const CATS: Record<string, string> = {
  collares: "Collares",
  aretes: "Aretes",
  anillos: "Anillos",
  pulseras: "Pulseras",
  sets: "Sets"
};

export interface Product {
  id: number;
  name: string;
  cat: string;
  price: number;
  art: string;
  tag?: string;
  desc: string;
  image?: string;
  images?: string[];
  details?: string[];
}

export const PRODUCTS: Product[] = [
  // --- COLLARES ---
  {
    id: 1,
    name: "Collar Snake Gold",
    cat: "collares",
    price: 65,
    art: "snake",
    tag: "Favorito",
    desc: "Cadena plana tipo serpiente con brillo espejo. Medida: 38 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028353/c6a21e9f-eef2-4bd7-a248-0a2e54df8ba4.png",
    details: [
      "Medida: 38 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 2,
    name: "Collar Devoción",
    cat: "collares",
    price: 45,
    art: "cross",
    tag: "Nuevo",
    desc: "Dije medalla de devoción con acabado brillante. Medida: 40 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028338/d385c8d7-22c3-401c-9679-caeab66b09ac_1.png",
    details: [
      "Medida: 40 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 3,
    name: "Collar Lazos de Amor",
    cat: "collares",
    price: 65,
    art: "heart",
    tag: "Favorito",
    desc: "Diseño romántico de lazo delicado con caída suave. Medida: 38 – 40 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028314/804de4e5-51b5-4aef-ad7b-2d55c57831b1.png",
    details: [
      "Medida: 38 – 40 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 4,
    name: "Collar Cruz Gold (40 cm)",
    cat: "collares",
    price: 45,
    art: "cross",
    desc: "Cruz minimalista dorada sobre cadena fina. Medida: 40 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028308/430efdcb-39cd-4ce0-959a-e7fac72ea220.png",
    details: [
      "Medida: 40 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 5,
    name: "Collar Cruz Gold (45 cm)",
    cat: "collares",
    price: 66,
    art: "cross",
    tag: "Top",
    desc: "Cruz dorada estilizada con mayor longitud. Medida: 45 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028229/84da98e4-7af1-4e69-b96b-5914b4f43549.png",
    details: [
      "Medida: 45 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 6,
    name: "Collar Belle Choker",
    cat: "collares",
    price: 66,
    art: "snake",
    tag: "Nuevo",
    desc: "Choker elegante con textura fina y brillo impecable. Medida: 38 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792028219/8ac5f387-a05f-46c5-806e-90e295e0bab6.png",
    details: [
      "Medida: 38 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 7,
    name: "Collar Gota de Luz",
    cat: "collares",
    price: 65,
    art: "drop",
    desc: "Dije en forma de gota con acabado brillante. Cae con gracia y alarga el escote. Medida: 40 cm + 5 cm de extensor.",
    details: [
      "Medida: 40 cm + 5 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 8,
    name: "Collar Corazón",
    cat: "collares",
    price: 59,
    art: "heart",
    desc: "Cadena delicada con dije de corazón pulido. Femenino, atemporal y perfecto para regalar. Medida: 40 cm + 5 cm de extensor.",
    details: [
      "Medida: 40 cm + 5 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },

  // --- PULSERAS ---
  {
    id: 9,
    name: "Pulsera Cadena Lunar",
    cat: "pulseras",
    price: 55,
    art: "chain",
    tag: "Nuevo",
    desc: "Eslabones de brillo pulido con caída ligera. Medida: 17 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030049/8ae416a1-d710-42dd-8096-612e8b3a8014.png",
    details: [
      "Medida: 17 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 10,
    name: "Pulsera Fine Beour",
    cat: "pulseras",
    price: 50,
    art: "chain",
    tag: "Favorito",
    desc: "Diseño fino y minimalista ideal para combinar o usar en el día a día. Medida: 16 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    details: [
      "Medida: 16 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 11,
    name: "Pulsera Tendy",
    cat: "pulseras",
    price: 55,
    art: "chain",
    tag: "Nuevo",
    desc: "Diseño en tendencia con brillo dorado y ajuste regulable. Medida: 17 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030155/3a706163-1f18-4922-94b6-e01354ba52f9.png",
    details: [
      "Medida: 17 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 12,
    name: "Pulsera Chocker",
    cat: "pulseras",
    price: 45,
    art: "chain",
    tag: "Favorito",
    desc: "Pulsera estilo chocker delicada y luminosa. Medida: 17 cm + 6 cm de extensor. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030172/cf5d2629-513b-476f-8d62-ce37d8b63c4e.png",
    details: [
      "Medida: 17 cm + 6 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 13,
    name: "Pulsera Eslabones",
    cat: "pulseras",
    price: 65,
    art: "chain",
    desc: "Eslabones dorados con caída perfecta. La pulsera que combina con todo. Medida: 16 cm + 4 cm de extensor.",
    details: [
      "Medida: 16 cm + 4 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 14,
    name: "Pulsera Ojo de Tigre",
    cat: "pulseras",
    price: 59,
    art: "beads",
    desc: "Piedras naturales ojo de tigre intercaladas con esferas doradas. Calidez y energía. Medida: 16 cm + 4 cm de extensor.",
    details: [
      "Medida: 16 cm + 4 cm de extensor",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },

  // --- ARETES ---
  {
    id: 15,
    name: "Argollas Huggie",
    cat: "aretes",
    price: 49,
    art: "huggies",
    tag: "Favorito",
    desc: "Argollas pequeñas que abrazan el lóbulo. Perfectas para usar solas o combinar con más piezas. Medida: Diámetro 12 mm.",
    details: [
      "Medida: Diámetro 12 mm",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 16,
    name: "Aretes Corazón",
    cat: "aretes",
    price: 45,
    art: "heartear",
    tag: "Nuevo",
    desc: "Corazones dorados con volumen suave. Románticos y modernos a la vez. Medida: 15 mm x 14 mm.",
    details: [
      "Medida: 15 mm x 14 mm",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 17,
    name: "Argollas Bold",
    cat: "aretes",
    price: 55,
    art: "bold",
    desc: "Argollas gruesas de presencia elegante para elevar cualquier look básico. Medida: Diámetro 20 mm.",
    details: [
      "Medida: Diámetro 20 mm",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },

  // --- ANILLOS ---
  {
    id: 18,
    name: "Anillo Ondas",
    cat: "anillos",
    price: 43,
    art: "trio",
    tag: "Nuevo",
    desc: "Líneas onduladas con acabado pulido que reflejan la luz con delicadeza. Medida: Regulable. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030263/ec12ae98-cef8-4083-9d72-787f9389f1c9.png",
    details: [
      "Medida: Regulable",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 19,
    name: "Anillo Eterno",
    cat: "anillos",
    price: 45,
    art: "signet",
    tag: "Favorito",
    desc: "Diseño continuo y atemporal para elevar tus manos con elegancia diaria. Medida: Regulable. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030262/03b1a7e1-9f51-4498-8e50-61fd0c915e3d.png",
    details: [
      "Medida: Regulable",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 20,
    name: "Anillos Trío",
    cat: "anillos",
    price: 49,
    art: "trio",
    tag: "Set x3",
    desc: "Tres aros finos para usar juntos o por separado. Apilables y versátiles. Medida: Talla estándar regulable.",
    details: [
      "Medida: Talla estándar regulable",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 21,
    name: "Anillo Sello Texturizado",
    cat: "anillos",
    price: 55,
    art: "signet",
    desc: "Anillo ancho con textura martillada que juega con la luz. Statement minimalista. Medida: Talla estándar regulable.",
    details: [
      "Medida: Talla estándar regulable",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },

  // --- SETS ---
  {
    id: 22,
    name: "Pack Aretes Petite",
    cat: "sets",
    price: 65,
    art: "set",
    tag: "Pack x3",
    desc: "Trío de aretes petite dorados para combinar o lucir en capas. Precio del pack: S/ 65 (c/u S/ 25). Medidas: 0.38 cm · 0.6 cm · 1.01 cm. Acero inoxidable 316L · Oro 18k PVD.",
    image: "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030578/5abf0173-73d3-432d-ac9c-25d20d15bf0b.png",
    images: [
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030578/5abf0173-73d3-432d-ac9c-25d20d15bf0b.png",
      "https://res.cloudinary.com/pdwsqs4f/image/upload/v1792030578/Tres_pares_de_aretes_dorados_elegantes.png"
    ],
    details: [
      "Medidas: 0.38 cm · 0.6 cm · 1.01 cm",
      "Precio pack S/ 65 (o S/ 25 c/u)",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  },
  {
    id: 23,
    name: "Set Everyday",
    cat: "sets",
    price: 99,
    art: "set",
    tag: "Ahorra",
    desc: "Collar fino + argollas huggie. El dúo esencial para brillar en lo simple, en un solo pack. Medida: Collar 40 cm + extensor / Argollas 12 mm.",
    details: [
      "Medida: Collar 40 cm + extensor / Argollas 12 mm",
      "Acero inoxidable 316L · Oro 18k PVD",
      "100% waterproof: el color no se va",
      "Hipoalergénica, apta para pieles sensibles"
    ]
  }
];

export const FAQ = [
  ["¿De verdad puedo ducharme con mis joyas?", "Sí. Nuestras piezas son de acero 316L enchapado en oro 18k con tecnología PVD, por lo que resisten el agua, el sudor y el uso diario sin perder su color."],
  ["¿Son aptas para pieles sensibles?", "Sí, son hipoalergénicas. El acero 316L es un material noble que se usa justamente por ser amable con la piel."],
  ["¿Cómo cuido mis joyas para que duren más?", "Sécalas después de nadar, guárdalas por separado para evitar roces y evita productos abrasivos. Con eso tu brillo dura mucho más."],
  ["¿Hacen envíos a provincia?", "Sí, enviamos a todo el Perú. Al enviar tu pedido por WhatsApp te confirmamos el costo y tiempo de entrega a tu ciudad."],
  ["¿Cuáles son los medios de pago?", "Te los indicamos al confirmar tu pedido por WhatsApp."]
];

export const SCENES: Record<string, { label: string; cap: string }> = {
  ducha:   { label: "Ducha diaria",      cap: "Te duchas con ella todos los días y el dorado sigue intacto." },
  mar:     { label: "Mar, sol y arena",  cap: "Agua salada, arena y sol de verano: el color no se va." },
  piscina: { label: "Piscina con cloro", cap: "Ni el cloro de la piscina le quita el brillo." },
  gym:     { label: "Entrenamiento",     cap: "Sudor y movimiento sin manchar tu piel ni oscurecer la joya." }
};

export const soles = (n: number) => "S/ " + n.toFixed(0);
export const waLink = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

let uid = 0;
export function art(type: string, big?: boolean): string {
  const g = "g" + (uid++), t = "t" + uid;
  const G = `url(#${g})`;
  const defs = `<defs>
    <linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F6E3AE"/><stop offset=".35" stop-color="#D1AA62"/>
      <stop offset=".62" stop-color="#9A7234"/><stop offset=".85" stop-color="#E4C686"/><stop offset="1" stop-color="#B8904A"/>
    </linearGradient>
    <radialGradient id="${t}" cx=".35" cy=".35" r=".8">
      <stop offset="0" stop-color="#C98B3E"/><stop offset=".5" stop-color="#7A4A1E"/><stop offset="1" stop-color="#3D2410"/>
    </radialGradient>
  </defs>`;
  const spark = (x: number, y: number, s = 1, c = "") => `<path class="tw ${c}" transform="translate(${x} ${y}) scale(${s})" d="M0-8L1.6-1.6 8 0 1.6 1.6 0 8-1.6 1.6-8 0-1.6-1.6Z" fill="#fff"/>`;
  const fine = `<path d="M38 22 C46 120,154 120,162 22" fill="none" stroke="${G}" stroke-width="1.8" stroke-dasharray="3.2 1.6" stroke-linecap="round"/>`;
  const heartP = (x: number, y: number, s: number) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 20C-12 11-11 0-5.5 0-2.5 0 0 2.5 0 4 0 2.5 2.5 0 5.5 0 11 0 12 11 0 20Z" fill="${G}"/><path d="M-6 3C-8 4-8 7-7 9" stroke="#fff" stroke-opacity=".7" stroke-width="1.2" fill="none" stroke-linecap="round"/></g>`;
  const bail = (x: number, y: number) => `<circle cx="${x}" cy="${y}" r="2.6" fill="none" stroke="${G}" stroke-width="1.6"/>`;
  let s = "";
  switch(type){
    case "snake":
      s = `<path d="M38 22 C46 122,154 122,162 22" fill="none" stroke="${G}" stroke-width="7" stroke-linecap="round"/>
           <path d="M42 26 C52 112,148 112,158 26" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.2"/>
           ${spark(122,96,.9)}${spark(56,62,.6,"d2")}`; break;
    case "heart":
      s = fine + bail(100,98) + heartP(100,101,1.1) + spark(118,108,.7)+spark(60,50,.5,"d3"); break;
    case "cross":
      s = fine + bail(100,98) + `<g fill="${G}"><rect x="97.5" y="101" width="5" height="30" rx="1.5"/><rect x="89" y="109" width="22" height="5" rx="1.5"/></g>
           <rect x="98.5" y="103" width="1.2" height="24" fill="#fff" opacity=".6"/>` + spark(116,106,.6); break;
    case "drop":
      s = fine + bail(100,98) + `<path d="M100 101C104 108 110 115 110 121A10 10 0 0 1 90 121C90 115 96 108 100 101Z" fill="${G}"/>
           <ellipse cx="96" cy="118" rx="2.4" ry="4" fill="#fff" opacity=".6"/>` + spark(117,116,.8)+spark(80,60,.5,"d2"); break;
    case "huggies":
      s = `<ellipse cx="70" cy="100" rx="22" ry="27" fill="none" stroke="${G}" stroke-width="8"/>
           <ellipse cx="132" cy="100" rx="22" ry="27" fill="none" stroke="${G}" stroke-width="8"/>
           <path d="M54 88A20 24 0 0 1 70 75" stroke="#fff" stroke-opacity=".65" stroke-width="1.5" fill="none"/>
           <path d="M116 88A20 24 0 0 1 132 75" stroke="#fff" stroke-opacity=".65" stroke-width="1.5" fill="none"/>`+spark(150,76,.8)+spark(52,124,.5,"d3"); break;
    case "bold":
      s = `<ellipse cx="100" cy="102" rx="44" ry="50" fill="none" stroke="${G}" stroke-width="15"/>
           <path d="M66 82A38 44 0 0 1 100 56" stroke="#fff" stroke-opacity=".6" stroke-width="2.4" fill="none" stroke-linecap="round"/>
           <rect x="94" y="44" width="12" height="6" rx="3" fill="${G}"/>`+spark(140,70,.9)+spark(66,140,.5,"d2"); break;
    case "heartear":
      s = `<line x1="68" y1="62" x2="68" y2="74" stroke="${G}" stroke-width="2"/><line x1="132" y1="62" x2="132" y2="74" stroke="${G}" stroke-width="2"/>`
          + heartP(68,72,2.3) + heartP(132,72,2.3) + spark(150,80,.8)+spark(50,110,.5,"d3"); break;
    case "trio":
      s = `<ellipse cx="100" cy="78" rx="44" ry="15" fill="none" stroke="${G}" stroke-width="3.5"/>
           <ellipse cx="100" cy="102" rx="44" ry="15" fill="none" stroke="${G}" stroke-width="5"/>
           <ellipse cx="100" cy="126" rx="44" ry="15" fill="none" stroke="${G}" stroke-width="3.5"/>
           <path d="M66 108A42 13 0 0 0 100 117" stroke="#fff" stroke-opacity=".6" stroke-width="1.3" fill="none"/>`+spark(142,96,.8); break;
    case "signet":
      s = `<ellipse cx="100" cy="112" rx="46" ry="22" fill="none" stroke="${G}" stroke-width="9"/>
           <rect x="72" y="70" width="56" height="36" rx="10" fill="${G}"/>
           <g stroke="#fff" stroke-opacity=".35" stroke-width="1.4">${Array.from({length:8},(_,i)=>`<line x1="${78+i*6}" y1="74" x2="${76+i*6}" y2="102"/>`).join("")}</g>
           <rect x="72" y="70" width="56" height="36" rx="10" fill="none" stroke="#fff" stroke-opacity=".4"/>`+spark(130,72,.9)+spark(64,134,.5,"d2"); break;
    case "chain": {
      const N=16, links: {y:number, el:string}[] = [];
      for(let i=0;i<N;i++){
        const a=2*Math.PI*i/N, x=100+58*Math.cos(a), y=104+28*Math.sin(a);
        const r=Math.atan2(28*Math.cos(a),-58*Math.sin(a))*180/Math.PI;
        links.push({y,el:`<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="9" ry="5.5" transform="rotate(${r.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="none" stroke="${G}" stroke-width="3" opacity="${Math.sin(a)<0?.6:1}"/>`});
      }
      s = links.sort((p,q)=>p.y-q.y).map(l=>l.el).join("")+spark(150,118,.8)+spark(56,82,.5,"d3"); break;
    }
    case "beads": {
      const N=18, b: {y:number, el:string}[] = [];
      for(let i=0;i<N;i++){
        const a=2*Math.PI*i/N, x=100+56*Math.cos(a), y=104+28*Math.sin(a), sc=.82+.18*Math.sin(a);
        b.push({y,el:`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(7.5*sc).toFixed(1)}" fill="${i%3===0?G:`url(#${t})`}"/><circle cx="${(x-2.2).toFixed(1)}" cy="${(y-2.4).toFixed(1)}" r="${(1.8*sc).toFixed(1)}" fill="#fff" opacity=".55"/>`});
      }
      s = b.sort((p,q)=>p.y-q.y).map(l=>l.el).join("")+spark(152,112,.7); break;
    }
    case "set":
      s = `<path d="M44 18 C52 100,148 100,156 18" fill="none" stroke="${G}" stroke-width="1.8" stroke-dasharray="3.2 1.6"/>`
          + bail(100,80) + `<circle cx="100" cy="88" r="5.5" fill="${G}"/>`
          + `<ellipse cx="74" cy="142" rx="14" ry="17" fill="none" stroke="${G}" stroke-width="5.5"/><ellipse cx="126" cy="142" rx="14" ry="17" fill="none" stroke="${G}" stroke-width="5.5"/>`
          + spark(140,126,.7)+spark(62,52,.5,"d2"); break;
  }
  const shift = ["snake","heart","cross","drop"].includes(type) ? 26 : ["set"].includes(type) ? 8 : 4;
  const shadow = `<ellipse cx="100" cy="172" rx="46" ry="4.5" fill="#8E6C33" opacity=".12"/>`;
  return `<svg viewBox="0 0 200 200" aria-hidden="true">${defs}${shadow}<g transform="translate(0 ${shift})">${s}</g></svg>`;
}
