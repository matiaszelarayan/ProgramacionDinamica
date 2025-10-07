import { useState } from 'react';
import './OcultarReact.css';

function OcultarReact() {
  const [oculto, setOculto] = useState(false);

  return (
    <div>
      <div className={oculto ? 'texto oculto' : 'texto'}>
        Este es un texto que se puede ocultar o mostrar.
      </div>
      <button onClick={() => setOculto(!oculto)}>
        Mostrar/Ocultar
      </button>
    </div>
  );
}

export default OcultarReact;
