

import Header from "../components/Header";
import { useState } from "react";

export default function Seccion1React() {
  const [moved, setMoved] = useState(false);
  const boxStyle: React.CSSProperties = {
    width: "150px",
    height: "150px",
    background: moved ? "#ffb3b3" : "#b3c6ff",
    position: "relative",
    left: moved ? 100 : 0,
    top: moved ? 50 : 0,
    transition: "background 0.3s, left 0.3s, top 0.3s",
    marginTop: 24
  };

  return (
    <>
      <Header />
      <div style={{ padding: 32 }}>
        <h2>Sección 1: Manipulación del DOM con React</h2>
        <button onClick={() => setMoved(m => !m)}>
          Cambiar color y posición
        </button>
        <div style={boxStyle}></div>
      </div>
    </>
  );
}
