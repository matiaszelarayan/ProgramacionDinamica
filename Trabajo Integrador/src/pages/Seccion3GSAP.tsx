

import Header from "../components/Header";
import { useRef, useState } from "react";
import { gsap } from "gsap";

export default function Seccion3GSAP() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const handleAnimate = () => {
    if (!active && boxRef.current) {
      setActive(true);
      gsap.to(boxRef.current, {
        duration: 0.6,
        backgroundColor: "#ffb3b3",
        width: 220,
        height: 220,
        x: 100,
        y: 60,
        borderRadius: 32,
        ease: "power2.inOut",
        onComplete: () => setActive(false)
      });
    }
  };

  const handleReset = () => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        duration: 0.5,
        backgroundColor: "#b3c6ff",
        width: 150,
        height: 150,
        x: 0,
        y: 0,
        borderRadius: 16,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <>
      <Header />
      <div style={{ padding: 32 }}>
        <h2>Sección 3: Animaciones con GSAP</h2>
        <button
          onClick={handleAnimate}
          disabled={active}
          style={{ marginRight: 16, padding: "10px 24px", fontSize: "1rem", borderRadius: 8, background: "#b3c6ff", border: "none", cursor: active ? "not-allowed" : "pointer", fontWeight: 500 }}
        >
          Activar animación
        </button>
        <button
          onClick={handleReset}
          style={{ padding: "10px 24px", fontSize: "1rem", borderRadius: 8, background: "#e3e3e3", border: "none", cursor: "pointer", fontWeight: 500 }}
        >
          Reset
        </button>
        <div
          ref={boxRef}
          style={{
            width: 150,
            height: 150,
            background: "#b3c6ff",
            borderRadius: 16,
            marginTop: 32,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            position: "relative"
          }}
        ></div>
      </div>
    </>
  );
}
