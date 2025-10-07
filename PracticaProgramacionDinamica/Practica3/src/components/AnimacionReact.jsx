import { useState } from 'react';
import './AnimacionReact.css';

function AnimacionReact() {
  const [aLaDerecha, setALaDerecha] = useState(false);

  return (
    <div>
      <button onClick={() => setALaDerecha(!aLaDerecha)}>
        Animar
      </button>
      <div className={aLaDerecha ? 'cuadro derecha' : 'cuadro'}></div>
    </div>
  );
}

export default AnimacionReact;
