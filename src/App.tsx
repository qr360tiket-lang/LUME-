import React, { useState, useEffect, useRef } from "react";
import {
  CATS,
  PRODUCTS,
  FAQ,
  Product,
  soles,
  waLink,
  art,
} from "./data/catalog.ts";
import { WaterStage } from "./components/WaterStage.tsx";

export default function App() {
  // Loader state
  const [loaderOut, setLoaderOut] = useState<boolean>(false);

  // Header scroll state
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Mobile menu state
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  // Catalog filter and search
  const [activeCategory, setActiveCategory] = useState<string>("todo");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Shopping bag: Record<productId, quantity>
  const [bag, setBag] = useState<Record<number, number>>({});
  const [isBagOpen, setIsBagOpen] = useState<boolean>(false);
  const [bagCountBump, setBagCountBump] = useState<boolean>(false);

  // Product modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalQty, setModalQty] = useState<number>(1);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [cardImageIndexes, setCardImageIndexes] = useState<Record<number, number>>({});

  // Toast notification
  const [toastText, setToastText] = useState<string>("");
  const [toastActive, setToastActive] = useState<boolean>(false);
  const toastTimeoutRef = useRef<number | null>(null);

  // Counters for Acero stats
  const [counts, setCounts] = useState<{ c100: number; c10: number; c18: number }>({
    c100: 0,
    c10: 0,
    c18: 0,
  });
  const [counted, setCounted] = useState<boolean>(false);

  // Hero sparkle trail
  const heroRef = useRef<HTMLDivElement | null>(null);
  const lastSparkleTime = useRef<number>(0);

  // Hide loader shortly after mount
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoaderOut(true);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  // Scroll listener for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation for modal and escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAllOverlays();
      } else if (selectedProduct) {
        const modalImages = selectedProduct.images && selectedProduct.images.length > 0
          ? selectedProduct.images
          : selectedProduct.image
          ? [selectedProduct.image]
          : null;
        if (modalImages && modalImages.length > 1) {
          if (e.key === "ArrowLeft") {
            setModalImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
          } else if (e.key === "ArrowRight") {
            setModalImageIndex((prev) => (prev + 1) % modalImages.length);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  // IntersectionObserver for reveal (.rv) and stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".rv").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory, searchQuery]);

  // Observer for stats countup
  const statsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!statsRef.current) return;
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted) {
          setCounted(true);
          const t0 = performance.now();
          const duration = 1400;

          const tick = (t: number) => {
            const progress = Math.min(1, (t - t0) / duration);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCounts({
              c100: Math.round(100 * easeProgress),
              c10: Math.round(10 * easeProgress),
              c18: Math.round(18 * easeProgress),
            });
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );

    statsObserver.observe(statsRef.current);
    return () => statsObserver.disconnect();
  }, [counted]);

  // Toast trigger
  const showToast = (message: string) => {
    setToastText(message);
    setToastActive(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastActive(false);
    }, 2200);
  };

  // Add to bag
  const addToBag = (productId: number, qty = 1) => {
    setBag((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + qty,
    }));
    const product = PRODUCTS.find((p: Product) => p.id === productId);
    if (product) {
      showToast(`${product.name} añadido a tu pedido`);
    }
    setBagCountBump(true);
    setTimeout(() => setBagCountBump(false), 500);
  };

  const updateBagQty = (productId: number, delta: number) => {
    setBag((prev) => {
      const current = prev[productId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: next };
    });
  };

  const removeBagItem = (productId: number) => {
    setBag((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  const openProductModal = (product: Product, initialIndex?: number) => {
    setSelectedProduct(product);
    setModalQty(1);
    setModalImageIndex(initialIndex ?? (cardImageIndexes[product.id] || 0));
  };

  const closeAllOverlays = () => {
    setIsBagOpen(false);
    setSelectedProduct(null);
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((p: Product) => {
    const matchesCat = activeCategory === "todo" || p.cat === activeCategory || (p.cats && p.cats.includes(activeCategory));
    const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCat && matchesQuery;
  });

  // Calculate totals
  const bagItemIds = Object.keys(bag)
    .map(Number)
    .filter((id: number) => (bag[id] || 0) > 0);
  const totalItemCount = bagItemIds.reduce((sum: number, id: number) => sum + (bag[id] || 0), 0);
  const bagTotalPrice = bagItemIds.reduce((sum: number, id: number) => {
    const p = PRODUCTS.find((item: Product) => item.id === id);
    return sum + (p ? p.price * bag[id] : 0);
  }, 0);

  // Send WhatsApp order
  const handleSendOrder = () => {
    if (bagItemIds.length === 0) return;
    const lines = bagItemIds.map((id: number) => {
      const p = PRODUCTS.find((item: Product) => item.id === id);
      const qty = bag[id];
      return `• ${qty} x ${p?.name} (${soles(p?.price || 0)})`;
    });
    const message = `Hola Lumé by Cin ✨ Quiero hacer este pedido:\n\n${lines.join(
      "\n"
    )}\n\nTotal: ${soles(bagTotalPrice)}\n\n¿Me confirman disponibilidad y envío? 💛`;
    window.open(waLink(message), "_blank");
  };

  // Sparkle on cursor in hero
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastSparkleTime.current < 45 || !heroRef.current) return;
    lastSparkleTime.current = now;

    const rect = heroRef.current.getBoundingClientRect();
    const span = document.createElement("span");
    span.className = "sparkle-trail";
    span.textContent = "✦";
    span.style.left = `${e.clientX - rect.left}px`;
    span.style.top = `${e.clientY - rect.top}px`;
    span.style.fontSize = `${8 + Math.random() * 10}px`;
    span.style.setProperty("--dx", `${Math.random() * 40 - 20}px`);
    heroRef.current.appendChild(span);
    setTimeout(() => span.remove(), 1000);
  };

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  // Category counts
  const categoryList: { key: string; label: string; count: number }[] = [
    { key: "todo", label: "Todo", count: PRODUCTS.length },
    ...Object.entries(CATS).map(([k, v]: [string, string]) => ({
      key: k,
      label: v,
      count: PRODUCTS.filter((p: Product) => p.cat === k || (p.cats && p.cats.includes(k))).length,
    })),
  ];

  // Marquee text array
  const marqueeItems = [
    "Waterproof",
    "El color no se va",
    "Hipoalergénicas",
    "Oro 18k PVD",
    "Everyday elegance",
    "Envíos a todo el Perú",
  ];
  const repeatedMarquee = [
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
  ];

  return (
    <>
      {/* LOADER */}
      <div id="loader" className={loaderOut ? "out" : ""}>
        <div>
          <div className="logo lg">
            <span className="word">LUMÉ</span>
            <span className="by">BY CIN</span>
            <span className="jw">JEWELRY</span>
            <span className="ee">✦ EVERYDAY ELEGANCE ✦</span>
          </div>
          <div className="bar">
            <i></i>
          </div>
        </div>
      </div>

      {/* TOPBAR */}
      <div className="topbar">
        Envíos a todo el Perú <span className="star">✦</span> El color no se va{" "}
        <span className="star">✦</span> 100% waterproof
      </div>

      {/* HEADER */}
      <header id="hdr" className={isScrolled ? "scrolled" : ""}>
        <div className="wrap nav">
          <a href="#inicio" className="logo" aria-label="Lumé by Cin">
            <span className="word">LUMÉ</span>
            <span className="by">BY CIN · JEWELRY</span>
          </a>
          <nav>
            <a href="#coleccion">Colección</a>
            <a href="#acero">Acero 316L</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#pedido">Cómo pedir</a>
            <a href="#faq">Cuidados</a>
          </nav>
          <div className="actions">
            <button
              className="icon-btn"
              id="openBag"
              aria-label="Ver mi pedido"
              onClick={() => setIsBagOpen(true)}
            >
              <svg viewBox="0 0 24 24">
                <path d="M6 7h12l-1 13H7L6 7z" />
                <path d="M9 7a3 3 0 0 1 6 0" />
              </svg>
              <span
                className={`bag-count ${totalItemCount > 0 ? "show" : ""} ${
                  bagCountBump ? "bump" : ""
                }`}
                id="bagCount"
              >
                {totalItemCount}
              </span>
            </button>
            <button
              className="icon-btn menu-btn"
              id="menuBtn"
              aria-label="Menú"
              onClick={() => setMobileNavOpen((prev) => !prev)}
            >
              <svg viewBox="0 0 24 24">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <div className={`mnav ${mobileNavOpen ? "on" : ""}`} id="mnav">
        <a href="#coleccion" onClick={() => setMobileNavOpen(false)}>
          Colección
        </a>
        <a href="#acero" onClick={() => setMobileNavOpen(false)}>
          Acero 316L
        </a>
        <a href="#nosotros" onClick={() => setMobileNavOpen(false)}>
          Nosotros
        </a>
        <a href="#pedido" onClick={() => setMobileNavOpen(false)}>
          Cómo pedir
        </a>
        <a href="#faq" onClick={() => setMobileNavOpen(false)}>
          Cuidados
        </a>
      </div>

      {/* HERO */}
      <section
        className="hero"
        id="inicio"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
      >
        <div className="hero-bg-word">Lumé</div>
        <div className="wrap hero-grid">
          <div className="rv in">
            <span className="eyebrow">✦ Joyas waterproof · Hipoalergénicas</span>
            <h1>
              Para ti, que brillas <em className="gold">en lo simple.</em>
            </h1>
            <p className="lead">
              Piezas de acero 316L enchapadas en oro 18k que te acompañan en la ducha, en el
              mar y en cada abrazo. Elegancia para todos los días, sin miedo a que el color se
              vaya.
            </p>
            <div className="cta-row">
              <a href="#coleccion" className="btn btn-dark">
                Ver colección
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#"
                className="btn btn-line"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    waLink("Hola Lumé by Cin ✨ Quiero información sobre sus joyas."),
                    "_blank"
                  );
                }}
              >
                Pedir por WhatsApp
              </a>
            </div>
            <div className="hero-perks">
              <div>Oro 18k PVD</div>
              <div>Pieles sensibles</div>
              <div>Envíos nacionales</div>
            </div>
          </div>

          <div className="hero-visual rv in">
            <div className="arch" id="heroArch">
              <div className="hero-art" id="heroArt">
                <img
                  src="https://res.cloudinary.com/pdwsqs4f/image/upload/v1792019380/Retrato_en_arco_sobre_fondo_transparente.png"
                  alt="Lumé by Cin · Joyas Waterproof"
                  loading="eager"
                />
              </div>
              <div className="shine" />
            </div>

            <div className="badge-rot">
              <svg viewBox="0 0 132 132">
                <defs>
                  <path
                    id="circ"
                    d="M66,66 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
                  />
                </defs>
                <text>
                  <textPath href="#circ">
                    Waterproof ✦ Hipoalergénicas ✦ Oro 18k ✦
                  </textPath>
                </text>
              </svg>
              <b>
                18k<small>PVD</small>
              </b>
            </div>

            <div className="float-tag">
              <strong>El color no se va</strong>
              Úsala todos los días
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="track" id="marq">
          {repeatedMarquee.map((text: string, i: number) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      {/* COLECCION / CATALOG */}
      <section className="sec" id="coleccion">
        <div className="wrap">
          <div className="sec-head rv in">
            <span className="eyebrow">Catálogo</span>
            <h2>
              Nuestra primera <em className="gold">colección</em>
            </h2>
            <p>
              Piezas pensadas para usarse a diario. Elige tus favoritas, arma tu pedido y te
              lo enviamos por WhatsApp.
            </p>
            <div className="divider">✦</div>
          </div>

          <div className="toolbar rv in">
            <div className="chips" id="chips">
              {categoryList.map((cat) => (
                <button
                  key={cat.key}
                  className={`chip ${activeCategory === cat.key ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                  <sup>{String(cat.count)}</sup>
                </button>
              ))}
            </div>
            <label className="search">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="search"
                id="q"
                placeholder="Buscar una joya…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>
          </div>

          <div className="grid" id="grid">
            {filteredProducts.map((p: Product, i: number) => {
              const productImages = p.images && p.images.length > 0 ? p.images : p.image ? [p.image] : null;
              const activeImgIdx = cardImageIndexes[p.id] || 0;
              const currentImg = productImages ? productImages[activeImgIdx % productImages.length] : null;

              return (
                <article
                  key={p.id}
                  className="card in"
                  style={{ transitionDelay: `${(i % 4) * 80}ms` }}
                >
                  <div
                    className="media"
                    onClick={() => openProductModal(p, activeImgIdx)}
                  >
                    {p.tag && (
                      <span className={"tag " + (p.tag === "Favorito" ? "dark" : "")}>
                        {p.tag}
                      </span>
                    )}

                    {productImages && productImages.length > 1 && (
                      <span className="card-photo-count">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        {productImages.length} fotos
                      </span>
                    )}

                    {currentImg ? (
                      <img
                        src={currentImg}
                        alt={p.name}
                        className="product-img"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="art"
                        dangerouslySetInnerHTML={{ __html: art(p.art) }}
                      />
                    )}

                    {productImages && productImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="card-arrow card-prev"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardImageIndexes((prev) => ({
                              ...prev,
                              [p.id]:
                                (activeImgIdx - 1 + productImages.length) %
                                productImages.length,
                            }));
                          }}
                          aria-label="Foto anterior"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          className="card-arrow card-next"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardImageIndexes((prev) => ({
                              ...prev,
                              [p.id]: (activeImgIdx + 1) % productImages.length,
                            }));
                          }}
                          aria-label="Siguiente foto"
                        >
                          ›
                        </button>
                        <div className="card-gallery-dots">
                          {productImages.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              type="button"
                              className={"card-gallery-dot " + ((activeImgIdx % productImages.length) === dotIdx ? "active" : "")}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCardImageIndexes((prev) => ({ ...prev, [p.id]: dotIdx }));
                              }}
                              aria-label={"Ver foto " + (dotIdx + 1)}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    <div className="quick">
                      <button
                        className="q-view"
                        onClick={(e) => {
                          e.stopPropagation();
                          openProductModal(p, activeImgIdx);
                        }}
                      >
                        Ver
                      </button>
                      <button
                        className="q-add"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToBag(p.id, 1);
                        }}
                      >
                        + Añadir
                      </button>
                    </div>
                  </div>
                <div className="info">
                  <div>
                    <h3>{p.name}</h3>
                    <div className="mat">
                      {CATS[p.cat]} · Oro 18k
                    </div>
                  </div>
                  <div className="price">{soles(p.price)}</div>
                </div>

                <button
                  className="mobile-add"
                  onClick={() => addToBag(p.id, 1)}
                >
                  + Añadir
                </button>
              </article>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <p className="empty" style={{ display: "block" }}>
              No encontramos esa pieza… pero seguro te enamoras de otra ✦
            </p>
          )}
        </div>
      </section>

      {/* ACERO 316L + WATER TEST */}
      <section className="sec steel" id="acero">
        <div className="wrap steel-grid">
          <div className="rv in" ref={statsRef}>
            <span className="eyebrow" style={{ color: "var(--gold-2)" }}>
              Detrás de cada pieza
            </span>
            <h2>Acero 316L</h2>
            <span className="gold-it">enchapado en oro 18k PVD</span>
            <p className="body">
              Usamos una de las tecnologías de recubrimiento más avanzadas del mercado: hasta
              10 veces más resistente que el enchapado tradicional, para un brillo que no se
              apaga con el tiempo. Y como es hipoalergénico, es ideal para pieles sensibles.
            </p>
            <div className="stats">
              <div className="stat">
                <b>{counted ? counts.c100 : 100}%</b>
                <span>% Waterproof</span>
              </div>
              <div className="stat">
                <b>{counted ? counts.c10 : 10}x</b>
                <span>Más resistente</span>
              </div>
              <div className="stat">
                <b>{counted ? counts.c18 : 18}k</b>
                <span>Oro PVD</span>
              </div>
            </div>
          </div>

          <WaterStage />
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="sec story" id="nosotros">
        <div className="wrap">
          <span className="eyebrow rv in">Nuestro nombre</span>
          <div className="big rv in">
            Lumé<em className="gold">significa luz</em>
          </div>
          <p className="rv in">
            Elegimos este nombre porque creemos que cada mujer merece brillar con su propia
            luz, todos los días, en cada gesto simple. Para quien encuentra elegancia en el
            día a día y no necesita ocasiones especiales para sentirse especial.
          </p>
          <div className="values">
            <div className="value rv in">
              <span className="n">01 — Nuestra promesa</span>
              <h3>
                Una joya que te acompaña, <em className="gold-it">sin límites</em>
              </h3>
              <p>
                Dúchate, nada, abraza fuerte. Piezas 100% waterproof e hipoalergénicas,
                pensadas para que jamás tengas que quitártelas.
              </p>
            </div>
            <div className="value rv in">
              <span className="n">02 — Nuestros valores</span>
              <h3>
                Calidad <em className="gold-it">que se siente</em>
              </h3>
              <p>
                Detrás de cada pieza hay una selección minuciosa, materiales nobles y un
                compromiso: que lo que uses en tu piel dure contigo.
              </p>
            </div>
            <div className="value rv in">
              <span className="n">03 — Para ti</span>
              <h3>
                Elegancia <em className="gold-it">de todos los días</em>
              </h3>
              <p>
                Diseños minimalistas que combinan con tu jean favorito, tu blusa blanca y tu
                día a día. Everyday elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PEDIDO / STEPS */}
      <section className="sec steps" id="pedido">
        <div className="wrap">
          <div className="sec-head rv in">
            <span className="eyebrow">Fácil y rápido</span>
            <h2>
              ¿Cómo <em className="gold">pedir?</em>
            </h2>
          </div>
          <div className="steps-grid">
            <div className="step rv in">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3l2.2 6.8H21l-5.5 4 2.1 6.7L12 16.4 6.4 20.5l2.1-6.7L3 9.8h6.8z" />
                </svg>
              </div>
              <h3>Elige tus piezas</h3>
              <p>Añade a tu pedido las joyas que te enamoren del catálogo.</p>
            </div>

            <div className="step rv in">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z" />
                  <path d="M9 10h6M9 13h4" />
                </svg>
              </div>
              <h3>Envíalo por WhatsApp</h3>
              <p>
                Con un clic nos llega tu lista completa. Te confirmamos stock y forma de
                pago.
              </p>
            </div>

            <div className="step rv in">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
                  <circle cx="7" cy="17.5" r="1.8" />
                  <circle cx="17" cy="17.5" r="1.8" />
                </svg>
              </div>
              <h3>Recíbelo en casa</h3>
              <p>
                Enviamos a todo el Perú, empacado con el cariño que tu joya merece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="wrap">
          <div className="sec-head rv in">
            <span className="eyebrow">Cuidados & preguntas</span>
            <h2>
              Todo lo que <em className="gold">quieres saber</em>
            </h2>
          </div>
          <div className="faq rv in" id="faqList">
            {FAQ.map(([q, a]: string[], idx: number) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`qa ${isOpen ? "open" : ""}`}>
                  <button onClick={() => toggleFaq(idx)}>
                    {q}
                    <i>+</i>
                  </button>
                  <div
                    className="a"
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                    }}
                  >
                    <p>{a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="ig">
        <span
          className="orb"
          style={{ width: "520px", height: "520px", left: "-180px", top: "-200px" }}
        />
        <span
          className="orb"
          style={{ width: "380px", height: "380px", right: "-120px", bottom: "-160px" }}
        />
        <div className="wrap rv in">
          <span className="eyebrow" style={{ color: "var(--gold-2)" }}>
            Síguenos y sé parte del brillo
          </span>
          <h2>Nuevas piezas, primero en Instagram</h2>
          <div className="handle">@lume_by_cin</div>
          <a
            className="btn"
            href="https://www.instagram.com/lume_by_cin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seguir en Instagram
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <div className="logo">
                <span className="word">LUMÉ</span>
                <span className="by">BY CIN · JEWELRY</span>
              </div>
              <p className="tagline">
                Joyas waterproof e hipoalergénicas de acero 316L con oro 18k PVD. Everyday
                elegance.
              </p>
            </div>
            <div>
              <h4>Catálogo</h4>
              <ul id="footCats">
                {Object.entries(CATS).map(([k, v]: [string, string]) => (
                  <li key={k}>
                    <a
                      href="#coleccion"
                      onClick={() => {
                        setActiveCategory(k);
                      }}
                    >
                      {String(v)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Ayuda</h4>
              <ul>
                <li>
                  <a href="#pedido">Cómo pedir</a>
                </li>
                <li>
                  <a href="#faq">Cuidados</a>
                </li>
                <li>
                  <a href="#acero">Materiales</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contacto</h4>
              <ul>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        waLink("Hola Lumé by Cin ✨"),
                        "_blank"
                      );
                    }}
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lume_by_cin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>Envíos a todo el Perú 🇵🇪</li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 Lumé by Cin. Todos los derechos reservados.</span>
            <span>Diseño web por wha.pe</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="#"
        className="wa-float"
        aria-label="WhatsApp"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            waLink("Hola Lumé by Cin ✨ Quiero información sobre sus joyas."),
            "_blank"
          );
        }}
      >
        <svg viewBox="0 0 32 32">
          <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-2.2c1.9 1 4 1.6 6.1 1.6 7 0 12.6-5.6 12.6-12.6S23 3 16 3zm0 23c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.1 1.3 1.3-4-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.6C5.4 9.8 10.2 5 16 5s10.6 4.8 10.6 10.6S21.8 26 16 26zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.7-2.2s0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6s0-.4 0-.6-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.6 4.9 2.8 1.1 3.3.9 3.9.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
        </svg>
      </a>

      {/* OVERLAY */}
      <div
        className={`overlay ${isBagOpen || selectedProduct ? "on" : ""}`}
        id="overlay"
        onClick={closeAllOverlays}
      />

      {/* DRAWER / SHOPPING BAG */}
      <aside
        className={`drawer ${isBagOpen ? "on" : ""}`}
        id="drawer"
        aria-label="Mi pedido"
      >
        <div className="drawer-head">
          <h3>
            Mi pedido <span className="star">✦</span>
          </h3>
          <button
            className="icon-btn"
            id="closeBag"
            aria-label="Cerrar"
            onClick={() => setIsBagOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="drawer-body" id="bagBody">
          {bagItemIds.length > 0 ? (
            bagItemIds.map((id: number) => {
              const p = PRODUCTS.find((x: Product) => x.id === id);
              if (!p) return null;
              return (
                <div key={id} className="line-item">
                  <div className="th">
                    {p.images && p.images.length > 0 ? (
                      <img src={p.images[0]} alt={p.name} />
                    ) : p.image ? (
                      <img src={p.image} alt={p.name} />
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: art(p.art) }} />
                    )}
                  </div>
                  <div>
                    <h4>{p.name}</h4>
                    <small>{soles(p.price)}</small>
                    <br />
                    <div className="qty">
                      <button
                        onClick={() => updateBagQty(id, -1)}
                        aria-label="Disminuir cantidad"
                      >
                        −
                      </button>
                      <span>{bag[id]}</span>
                      <button
                        onClick={() => updateBagQty(id, 1)}
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="rm"
                    onClick={() => removeBagItem(id)}
                  >
                    Quitar
                  </button>
                </div>
              );
            })
          ) : (
            <div className="drawer-empty">
              <div className="serif">Tu pedido está vacío</div>
              <p>Explora la colección y elige las piezas que te hagan brillar ✦</p>
            </div>
          )}
        </div>

        <div className="drawer-foot">
          <div className="total">
            <span>Total</span>
            <b id="bagTotal">{soles(bagTotalPrice)}</b>
          </div>
          <small>
            Te confirmamos stock, costo de envío y forma de pago por WhatsApp.
          </small>
          <button
            className="btn btn-wa"
            id="sendOrder"
            disabled={bagItemIds.length === 0}
            style={{ opacity: bagItemIds.length > 0 ? 1 : 0.5 }}
            onClick={handleSendOrder}
          >
            <svg viewBox="0 0 32 32" width="18" height="18">
              <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-2.2c1.9 1 4 1.6 6.1 1.6 7 0 12.6-5.6 12.6-12.6S23 3 16 3z" />
            </svg>
            Enviar pedido por WhatsApp
          </button>
        </div>
      </aside>

      {/* PRODUCT DETAIL MODAL */}
      <div
        className={`modal ${selectedProduct ? "on" : ""}`}
        id="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if ((e.target as HTMLElement).id === "modal") {
            closeAllOverlays();
          }
        }}
      >
        {selectedProduct && (
          <div className="box">
            <button
              className="close"
              id="closeModal"
              aria-label="Cerrar"
              onClick={closeAllOverlays}
            >
              ✕
            </button>
            {(() => {
              const modalImages = selectedProduct.images && selectedProduct.images.length > 0
                ? selectedProduct.images
                : selectedProduct.image
                ? [selectedProduct.image]
                : null;
              const curModalImg = modalImages ? modalImages[modalImageIndex % modalImages.length] : null;

              return (
                <div className="m-media" id="mMedia">
                  {modalImages && modalImages.length > 1 && (
                    <>
                      <span className="gallery-counter">
                        {(modalImageIndex % modalImages.length) + 1} / {modalImages.length}
                      </span>
                      <button
                        type="button"
                        className="gallery-arrow prev"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
                        }}
                        aria-label="Foto anterior"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        className="gallery-arrow next"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalImageIndex((prev) => (prev + 1) % modalImages.length);
                        }}
                        aria-label="Siguiente foto"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {curModalImg ? (
                    <img
                      src={curModalImg}
                      alt={selectedProduct.name}
                      className={"max-w-full max-h-[300px] object-contain drop-shadow-md transition-all duration-300 " + (modalImages && modalImages.length > 1 ? "cursor-pointer hover:scale-[1.02]" : "")}
                      onClick={() => {
                        if (modalImages && modalImages.length > 1) {
                          setModalImageIndex((prev) => (prev + 1) % modalImages.length);
                        }
                      }}
                      title={modalImages && modalImages.length > 1 ? "Clic para ver siguiente foto" : undefined}
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: art(selectedProduct.art, true),
                      }}
                    />
                  )}

                  {modalImages && modalImages.length > 1 && (
                    <div className="gallery-thumbs">
                      {modalImages.map((src: string, idx: number) => (
                        <button
                          key={idx}
                          type="button"
                          className={`gallery-thumb ${modalImageIndex === idx ? "active" : ""}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalImageIndex(idx);
                          }}
                          aria-label={`Ver foto ${idx + 1}`}
                        >
                          <img src={src} alt={`${selectedProduct.name} ${idx + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}
            <div className="m-info">
              <span className="eyebrow" id="mCat">
                {CATS[selectedProduct.cat]}
              </span>
              <h3 id="mName">{selectedProduct.name}</h3>
              <div className="m-price" id="mPrice">
                {soles(selectedProduct.price)}
              </div>
              <p className="m-desc" id="mDesc">
                {selectedProduct.desc}
              </p>
              <ul>
                {selectedProduct.details ? (
                  selectedProduct.details.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))
                ) : (
                  <>
                    <li>Acero 316L enchapado en oro 18k PVD</li>
                    <li>100% waterproof: el color no se va</li>
                    <li>Hipoalergénica, apta para pieles sensibles</li>
                  </>
                )}
              </ul>
              <div className="m-actions">
                <div className="qty" style={{ margin: 0 }}>
                  <button
                    onClick={() => setModalQty((q: number) => Math.max(1, q - 1))}
                    aria-label="Disminuir cantidad"
                  >
                    −
                  </button>
                  <span id="mQty">{modalQty}</span>
                  <button
                    onClick={() => setModalQty((q: number) => q + 1)}
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-dark"
                  id="mAdd"
                  onClick={() => {
                    addToBag(selectedProduct.id, modalQty);
                    closeAllOverlays();
                    setTimeout(() => setIsBagOpen(true), 350);
                  }}
                >
                  Añadir al pedido
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* TOAST NOTIFICATION */}
      <div className={`toast ${toastActive ? "on" : ""}`} id="toast">
        <span className="star">✦</span>
        <span id="toastTxt">{toastText}</span>
      </div>
    </>
  );
}
