import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function AnimeDemo() {
  const elRef = useRef();

  useEffect(() => {
    anime({
      targets: elRef.current,
      translateX: 250,
      direction: 'alternate',
      loop: true,
      duration: 1200
    });
  }, []);

  return (
    <div>
      <h3>Anime.js demo</h3>
      <div ref={elRef} style={{ width: 50, height: 50, background: '#74b9ff' }}></div>
    </div>
  );
}
