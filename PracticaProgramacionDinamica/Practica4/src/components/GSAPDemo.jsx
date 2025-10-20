import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function GSAPDemo() {
  const boxRef = useRef();
  const timelineRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
    timelineRef.current
      .to(boxRef.current, { x: 200, background: '#00b894', scale: 1.5, duration: 1 })
      .to(boxRef.current, { y: 100, background: '#fdcb6e', scale: 1, duration: 1 })
      .to(boxRef.current, { x: 0, y: 0, background: '#fd79a8', scale: 1, duration: 1 });
    // Limpieza
    return () => timelineRef.current && timelineRef.current.kill();
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isAnimating) {
        timelineRef.current.play();
      } else {
        timelineRef.current.pause();
      }
    }
  }, [isAnimating]);

  return (
    <div>
      <h3>GSAP demo</h3>
      <div ref={boxRef} style={{ width: 60, height: 60, background: '#fd79a8', marginBottom: 12 }}></div>
      <button onClick={() => setIsAnimating(a => !a)}>
        {isAnimating ? 'Pausar animación' : 'Iniciar animación'}
      </button>
    </div>
  );
}
