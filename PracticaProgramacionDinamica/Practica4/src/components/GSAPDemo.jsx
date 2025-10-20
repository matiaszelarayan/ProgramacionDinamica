import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function GSAPDemo() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { x: 200, duration: 1, repeat: -1, yoyo: true });
  }, []);

  return (
    <div>
      <h3>GSAP demo</h3>
      <div ref={boxRef} style={{ width: 60, height: 60, background: '#fd79a8' }}></div>
    </div>
  );
}
