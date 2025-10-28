import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';

export default function JQueryDemo() {
  const boxRef = useRef();
  const [color, setColor] = useState('#ffeaa7');
  const [visible, setVisible] = useState(true);

  // Cambiar color con jQuery
  useEffect(() => {
    if (boxRef.current) {
      $(boxRef.current).css('background-color', color);
    }
  }, [color]);

  // Mostrar/ocultar con jQuery
  useEffect(() => {
    if (boxRef.current) {
      if (visible) {
        $(boxRef.current).fadeIn(300);
      } else {
        $(boxRef.current).fadeOut(300);
      }
    }
  }, [visible]);

  return (
    <div>
      <h3>jQuery demo</h3>
      <p ref={boxRef} style={{ padding: 10, margin: 0 }}>Párrafo manipulado con jQuery</p>
      <button onClick={() => setColor(color === '#ffeaa7' ? '#74b9ff' : '#ffeaa7')} style={{ marginTop: 8 }}>
        Cambiar color
      </button>
      <button onClick={() => setVisible(v => !v)} style={{ marginLeft: 8 }}>
        {visible ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
}
