

import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const cardStyle: React.CSSProperties = {
  background: "#f7f9fc",
  borderRadius: 16,
  boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
  padding: 32,
  margin: "32px auto",
  maxWidth: 600,
  textAlign: "center"
};

const btnStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  margin: "16px 0",
  padding: "18px 0",
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#333",
  background: "#b3c6ff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
  textDecoration: "none",
  transition: "background 0.2s, color 0.2s"
};

const btnHoverStyle: React.CSSProperties = {
  background: "#7a9cff",
  color: "#fff"
};

export default function Landing() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const links = [
    { to: "/seccion1-react", label: "Sección 1: Manipulación del DOM con React", react: true },
    { to: "/Seccion1Nativo.html", label: "Sección 1: Manipulación del DOM con JS Nativo", react: false },
    { to: "/seccion2-jquery", label: "Sección 2: Efectos de Ocultamiento con jQuery", react: true },
    { to: "/seccion3-gsap", label: "Sección 3: Animaciones con GSAP", react: true },
    { to: "/seccion4-anime", label: "Sección 4: Animaciones en Secuencia con Anime.js", react: true }
  ];
  return (
    <>
      <Header />
      <div style={cardStyle}>
        <h1 style={{ marginBottom: 8, color: "#3a4a7a" }}>Trabajo Integrador</h1>
        <h2 style={{ marginBottom: 24, fontWeight: 400, color: "#5a6fa0" }}>Programación Dinámica</h2>
        {links.map((l, i) =>
          l.react ? (
            <Link
              key={l.label}
              to={l.to}
              style={hovered === i ? { ...btnStyle, ...btnHoverStyle } : btnStyle}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {l.label}
            </Link>
          ) : (
            <a
              key={l.label}
              href={l.to}
              style={hovered === i ? { ...btnStyle, ...btnHoverStyle } : btnStyle}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label}
            </a>
          )
        )}
      </div>
    </>
  );
}
