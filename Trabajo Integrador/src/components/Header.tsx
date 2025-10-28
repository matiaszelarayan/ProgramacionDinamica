import React from "react";
import { Link } from "react-router-dom";

const navStyle: React.CSSProperties = {
  background: "#e3e3e3",
  padding: "16px 32px",
  marginBottom: 24,
  borderBottom: "2px solid #b3c6ff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
};

const ulStyle: React.CSSProperties = {
  display: "flex",
  gap: 24,
  listStyle: "none",
  margin: 0,
  padding: 0
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#333",
  fontWeight: 500,
  padding: "6px 16px",
  borderRadius: 6,
  transition: "background 0.2s, color 0.2s"
};

const linkHoverStyle: React.CSSProperties = {
  background: "#b3c6ff",
  color: "#222"
};

export default function Header() {
  // Para el hover, se puede usar un pequeño hook local
  const [hovered, setHovered] = React.useState<number | null>(null);
  const links = [
    { to: "/", label: "Inicio", react: true },
    { to: "/seccion1-react", label: "Sección 1 React", react: true },
    { to: "/Seccion1Nativo.html", label: "Sección 1 JS Nativo", react: false },
    { to: "/seccion2-jquery", label: "Sección 2 jQuery", react: true },
    { to: "/seccion3-gsap", label: "Sección 3 GSAP", react: true },
    { to: "/seccion4-anime", label: "Sección 4 Anime.js", react: true }
  ];
  return (
    <header style={navStyle}>
      <nav>
        <ul style={ulStyle}>
          {links.map((l, i) => (
            <li key={l.label}>
              {l.react ? (
                <Link
                  to={l.to}
                  style={hovered === i ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.to}
                  style={hovered === i ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
