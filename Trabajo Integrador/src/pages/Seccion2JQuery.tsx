import Header from "../components/Header";
import { useRef, useEffect, useState } from "react";
import $ from "jquery";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
];

export default function Seccion2JQuery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (galleryRef.current) {
      if (visible) {
        $(galleryRef.current).find(".gallery-item").fadeIn(600);
      } else {
        $(galleryRef.current).find(".gallery-item").fadeOut(600);
      }
    }
  }, [visible]);

  return (
    <>
      <Header />
      <div style={{ padding: 32 }}>
        <h2>Sección 2: Efectos de Ocultamiento con jQuery</h2>
        <button
          onClick={() => setVisible(v => !v)}
          style={{ marginBottom: 24, padding: "10px 24px", fontSize: "1rem", borderRadius: 8, background: "#b3c6ff", border: "none", cursor: "pointer", fontWeight: 500 }}
        >
          {visible ? "Ocultar galería" : "Mostrar galería"}
        </button>
        <div ref={galleryRef} style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Imagen ${i + 1}`}
              className="gallery-item"
              style={{ width: 180, height: 120, objectFit: "cover", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
