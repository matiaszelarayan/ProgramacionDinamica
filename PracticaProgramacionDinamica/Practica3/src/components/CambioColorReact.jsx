import { useState } from 'react';
import './CambioColorReact.css';

function CambioColorReact() {
  const [colorAlterno, setColorAlterno] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true);

  return (
    <div>
      <div className={colorAlterno ? 'caja alterno' : 'caja'}>Caja de color</div>
      {mostrarBoton && (
        <button onClick={() => setColorAlterno(!colorAlterno)}>
          Cambiar color
        </button>
      )}
      <button onClick={() => setMostrarBoton(!mostrarBoton)}>
        Ocultar botón color
      </button>
    </div>
  );
}

export default CambioColorReact;
