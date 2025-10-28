

import Header from "../components/Header";
import { useRef, useEffect, useState } from "react";
import anime from "animejs";

export default function Seccion4Anime() {
  const [items, setItems] = useState(["A", "B", "C", "D", "E"]);
  const [speed, setSpeed] = useState(800);
  const listRef = useRef<HTMLDivElement>(null);

  const animateList = () => {
    if (listRef.current) {
      anime({
        targets: listRef.current.querySelectorAll(".anime-item"),
        translateY: [0, -40, 0],
        scale: [1, 1.2, 1],
        backgroundColor: ["#b3c6ff", "#ffb3b3", "#b3c6ff"],
        borderRadius: ["16px", "32px", "16px"],
        delay: anime.stagger(150),
        duration: speed,
        easing: "easeOutElastic(1, .7)",
      });
    }
  };

  useEffect(() => {
    animateList();
    // eslint-disable-next-line
  }, [items, speed]);

  return (
    <>
      <Header />
      <div style={{ padding: 32 }}>
        <h2>Sección 4: Animaciones en Secuencia con Anime.js</h2>
        <div style={{ marginBottom: 24 }}>
          <label htmlFor="speed" style={{ marginRight: 12, fontWeight: 500 }}>Velocidad (ms):</label>
          <input
            id="speed"
            type="range"
            min={300}
            max={2000}
            value={speed}
            onChange={e => setSpeed(Number(e.target.value))}
            style={{ verticalAlign: "middle" }}
          />
          <span style={{ marginLeft: 12 }}>{speed} ms</span>
        </div>
        <button
          onClick={() => setItems([...items, String.fromCharCode(65 + items.length)])}
          style={{ marginBottom: 24, padding: "10px 24px", fontSize: "1rem", borderRadius: 8, background: "#b3c6ff", border: "none", cursor: "pointer", fontWeight: 500 }}
        >
          Agregar elemento
        </button>
        <div ref={listRef} style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="anime-item"
              style={{
                width: 80,
                height: 80,
                background: "#b3c6ff",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
