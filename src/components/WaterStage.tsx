import { useEffect, useRef, useState } from "react";
import { SCENES, art } from "../data/catalog.ts";
import { PHOTOS } from "../data/photos.ts";

interface WaterStageProps {
  onManualInteraction?: () => void;
}

export function WaterStage({ onManualInteraction }: WaterStageProps) {
  const [currentKey, setCurrentKey] = useState<string>("ducha");
  const [photoLoaded, setPhotoLoaded] = useState<Record<string, boolean>>({});
  const [showOk, setShowOk] = useState<boolean>(false);
  const [gleamArt, setGleamArt] = useState<boolean>(false);
  const [isAuto, setIsAuto] = useState<boolean>(true);
  const [hintVisible, setHintVisible] = useState<boolean>(true);
  const timerRef = useRef<number | null>(null);
  const okTimerRef = useRef<number | null>(null);

  const keys = Object.keys(SCENES);

  // Preload photos
  useEffect(() => {
    (Object.entries(PHOTOS) as [string, string][]).forEach(([key, src]) => {
      const img = new Image();
      img.onload = () => {
        setPhotoLoaded((prev) => ({ ...prev, [key]: true }));
      };
      img.src = src;
    });
  }, []);

  // Scene transition logic
  const activateScene = (key: string, manual = false) => {
    if (manual) {
      setIsAuto(false);
      if (timerRef.current) clearInterval(timerRef.current);
      if (onManualInteraction) onManualInteraction();
    }
    setHintVisible(false);
    setCurrentKey(key);
    setShowOk(false);
    setGleamArt(false);

    if (okTimerRef.current) clearTimeout(okTimerRef.current);
    okTimerRef.current = window.setTimeout(() => {
      setShowOk(true);
      setGleamArt(true);
    }, 1100);
  };

  // Auto carousel
  useEffect(() => {
    // Initial trigger
    activateScene("ducha", false);

    const interval = window.setInterval(() => {
      if (!isAuto) return;
      setCurrentKey((prev) => {
        const idx = keys.indexOf(prev);
        const nextKey = keys[(idx + 1) % keys.length];
        setShowOk(false);
        setGleamArt(false);
        if (okTimerRef.current) clearTimeout(okTimerRef.current);
        okTimerRef.current = window.setTimeout(() => {
          setShowOk(true);
          setGleamArt(true);
        }, 1100);
        return nextKey;
      });
    }, 4500);

    timerRef.current = interval;
    return () => {
      clearInterval(interval);
      if (okTimerRef.current) clearTimeout(okTimerRef.current);
    };
  }, [isAuto]);

  // Pre-generate streaks and sweat drops so positions remain steady
  const streaks = useRef(
    Array.from({ length: 46 }, (_, i) => ({
      left: 29 + ((i * 13) % 42) + (i % 3) * 0.5,
      dur: 0.55 + ((i * 7) % 35) / 100,
      del: ((i * 11) % 90) / 100,
    }))
  ).current;

  const sweatDrops = useRef(
    Array.from({ length: 12 }, (_, i) => ({
      left: 30 + ((i * 17) % 38),
      top: 28 + ((i * 11) % 24),
      dur: 1.8 + ((i * 5) % 10) / 10,
      del: ((i * 7) % 24) / 10,
    }))
  ).current;

  const wavePath = (amp: number) => {
    let d = "M0 30";
    for (let x = 0; x < 800; x += 100) {
      d += ` Q${x + 50} ${30 - amp} ${x + 100} 30`;
    }
    return d + " V80 H0Z";
  };

  const hasPhotoCurrent = !!photoLoaded[currentKey];

  return (
    <div className="water rv in" id="water">
      <span className="eyebrow" style={{ color: "var(--gold-2)" }}>
        Interactivo
      </span>
      <h3 className="water-title">
        ¿Se puede mojar? <em>Pruébalo.</em>
      </h3>

      <div className={`stage ${hasPhotoCurrent ? "has-photo" : ""}`} id="stage">
        <div className="scene-label show">{SCENES[currentKey]?.label}</div>

        {/* Central Jewelry Art */}
        <div
          className={`art ${gleamArt ? "gleam" : ""}`}
          id="waterArt"
          dangerouslySetInnerHTML={{
            __html: art("huggies").replace(/class="tw[^"]*"/g, 'style="display:none"'),
          }}
        />

        {hintVisible && (
          <div className="hint" id="hint">
            Toca un escenario ↓
          </div>
        )}

        <div className={`ok ${showOk ? "show" : ""}`} id="okBadge">
          ✓ Sigue dorada
        </div>

        {/* Photos layer */}
        {(Object.entries(PHOTOS) as [string, string][]).map(([k, src]) => (
          <div
            key={k}
            className={`layer photo ${currentKey === k ? "on" : ""}`}
            data-s={k}
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))}

        {/* DUCHA BG */}
        <div className={`layer bg bg-ducha ${currentKey === "ducha" ? "on" : ""}`} data-s="ducha">
          <span className="steam" style={{ left: "18%", top: "30%", width: "110px", height: "110px", animationDelay: "0s" }} />
          <span className="steam" style={{ left: "70%", top: "20%", width: "130px", height: "130px", animationDelay: "1.6s" }} />
          <span className="steam" style={{ left: "40%", top: "70%", width: "150px", height: "150px", animationDelay: "3.2s" }} />
        </div>
        {/* DUCHA FX */}
        <div className={`layer fx fx-ducha ${currentKey === "ducha" ? "on" : ""}`} data-s="ducha">
          <svg className="showerhead" viewBox="0 0 150 40">
            <defs>
              <linearGradient id="chrome" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#f4f6f7" />
                <stop offset=".5" stopColor="#a9b4ba" />
                <stop offset="1" stopColor="#e2e7ea" />
              </linearGradient>
            </defs>
            <rect x="70" y="0" width="10" height="16" fill="url(#chrome)" />
            <path d="M28 16h94l-8 16H36z" fill="url(#chrome)" stroke="#8d989e" strokeWidth=".8" />
          </svg>
          {streaks.map((st, i) => (
            <span
              key={i}
              className="streak"
              style={{
                left: `${st.left}%`,
                animationDuration: `${st.dur}s`,
                animationDelay: `${st.del}s`,
              }}
            />
          ))}
        </div>

        {/* MAR BG */}
        <div className={`layer bg bg-mar ${currentKey === "mar" ? "on" : ""}`} data-s="mar">
          <span className="sun" />
          <svg className="gull" viewBox="0 0 34 12">
            <path d="M1 9q8-9 16 0q8-9 16 0" fill="none" stroke="#6b5a45" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <svg className="wave" style={{ bottom: "40px", height: "90px", animationDuration: "14s" }} viewBox="0 0 800 80" preserveAspectRatio="none">
            <path d={wavePath(10)} fill="#8fd0dd" opacity="0.9" />
          </svg>
          <svg className="wave" style={{ bottom: "14px", height: "70px", animationDuration: "10s" }} viewBox="0 0 800 80" preserveAspectRatio="none">
            <path d={wavePath(12)} fill="#5fb2c7" opacity="0.95" />
          </svg>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "22px", background: "linear-gradient(180deg,#ecd3a4,#dcbd85)" }} />
        </div>
        {/* MAR FX */}
        <div className={`layer fx fx-mar ${currentKey === "mar" ? "on" : ""}`} data-s="mar">
          <svg className="wave" style={{ bottom: "-6px", height: "46px", animationDuration: "6s" }} viewBox="0 0 800 80" preserveAspectRatio="none">
            <path d={wavePath(8)} fill="#e9f7f9" opacity="0.75" />
          </svg>
          <svg className="wave" style={{ bottom: "-14px", height: "40px", animationDuration: "8s" }} viewBox="0 0 800 80" preserveAspectRatio="none">
            <path d={wavePath(9)} fill="#4aa6be" opacity="0.9" />
          </svg>
        </div>

        {/* PISCINA BG */}
        <div className={`layer bg bg-piscina ${currentKey === "piscina" ? "on" : ""}`} data-s="piscina">
          <span className="caustic" />
          <span className="caustic c2" />
        </div>
        {/* PISCINA FX */}
        <div className={`layer fx fx-piscina ${currentKey === "piscina" ? "on" : ""}`} data-s="piscina">
          <span className="caustic" style={{ opacity: 0.35 }} />
          {[0, 1.07, 2.14].map((d, i) => (
            <span key={i} className="ripple" style={{ animationDelay: `${d}s` }} />
          ))}
        </div>

        {/* GYM BG */}
        <div className={`layer bg bg-gym ${currentKey === "gym" ? "on" : ""}`} data-s="gym">
          <svg className="ecg" viewBox="0 0 400 46" preserveAspectRatio="none">
            <path className="base" d="M0 26H90l8-12 8 26 10-34 8 20h70l8-12 8 26 10-34 8 20h70l8-12 8 26 10-34 8 20H400" />
            <path className="beat" d="M0 26H90l8-12 8 26 10-34 8 20h70l8-12 8 26 10-34 8 20h70l8-12 8 26 10-34 8 20H400" />
          </svg>
          <svg className="dumbbell" viewBox="0 0 92 30">
            <g fill="#6b5236">
              <rect x="0" y="5" width="10" height="20" rx="2" />
              <rect x="10" y="1" width="10" height="28" rx="2" />
              <rect x="72" y="1" width="10" height="28" rx="2" />
              <rect x="82" y="5" width="10" height="20" rx="2" />
            </g>
            <rect x="20" y="12" width="52" height="6" rx="2" fill="#a88d68" />
          </svg>
          <svg className="kettle" viewBox="0 0 58 60">
            <path d="M17 20a12 12 0 0 1 24 0" fill="none" stroke="#6b5236" strokeWidth="6" />
            <circle cx="29" cy="38" r="20" fill="#6b5236" />
            <ellipse cx="22" cy="32" rx="5" ry="3" fill="#fff" opacity=".2" />
          </svg>
        </div>
        {/* GYM FX */}
        <div className={`layer fx fx-gym ${currentKey === "gym" ? "on" : ""}`} data-s="gym">
          {sweatDrops.map((sw, i) => (
            <span
              key={i}
              className="sweat"
              style={{
                left: `${sw.left}%`,
                top: `${sw.top}%`,
                animationDuration: `${sw.dur}s`,
                animationDelay: `${sw.del}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="scen" id="scen">
        <button
          className={currentKey === "ducha" ? "on" : ""}
          onClick={() => activateScene("ducha", true)}
          data-s="ducha"
        >
          <svg viewBox="0 0 24 24">
            <path d="M4 20V8a4 4 0 0 1 8 0" />
            <path d="M9 8h6l-1 3h-4z" />
            <path d="M10 14v1M12 14v2M14 14v1M11 18v1M13 18v1" />
          </svg>
          Ducha
          <i className={`prog ${currentKey === "ducha" && isAuto ? "run" : ""}`} />
        </button>

        <button
          className={currentKey === "mar" ? "on" : ""}
          onClick={() => activateScene("mar", true)}
          data-s="mar"
        >
          <svg viewBox="0 0 24 24">
            <circle cx="17" cy="6" r="2.5" />
            <path d="M2 14c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0M2 19c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0" />
          </svg>
          Mar
          <i className={`prog ${currentKey === "mar" && isAuto ? "run" : ""}`} />
        </button>

        <button
          className={currentKey === "piscina" ? "on" : ""}
          onClick={() => activateScene("piscina", true)}
          data-s="piscina"
        >
          <svg viewBox="0 0 24 24">
            <path d="M8 15V5a2 2 0 0 1 4 0M14 15V5a2 2 0 0 1 4 0M8 8h6M8 12h6" />
            <path d="M2 19c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0" />
          </svg>
          Piscina
          <i className={`prog ${currentKey === "piscina" && isAuto ? "run" : ""}`} />
        </button>

        <button
          className={currentKey === "gym" ? "on" : ""}
          onClick={() => activateScene("gym", true)}
          data-s="gym"
        >
          <svg viewBox="0 0 24 24">
            <path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11" />
          </svg>
          Gym
          <i className={`prog ${currentKey === "gym" && isAuto ? "run" : ""}`} />
        </button>
      </div>

      <p className="caption" id="caption">
        {SCENES[currentKey]?.cap}
      </p>
    </div>
  );
}
