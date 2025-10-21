import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function AnimeDemo() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);
    const tl = anime.timeline({
      easing: 'easeOutBounce',
      duration: 800
    });
    items.forEach((_, i) => {
      tl.add({
        targets: itemRefs.current[i],
        translateY: [ -100, 0 ],
        opacity: [0, 1],
        delay: i * 100
      }, i * 100);
    });
    return () => anime.remove(itemRefs.current);
  }, [items]);

  return (
    <div>
      <h3>Anime.js demo</h3>
      <button onClick={() => setItems(arr => [...arr, arr.length + 1])} style={{marginBottom: 12}}>
        Agregar elemento
      </button>
      <div style={{ display: 'flex', gap: 12 }}>
        {items.map((item, i) => (
          <div
            key={item}
            ref={el => itemRefs.current[i] = el}
            style={{ width: 40, height: 40, background: '#74b9ff', borderRadius: 8, opacity: 0, willChange: 'transform, opacity, background' }}
          >{item}</div>
        ))}
      </div>
    </div>
  );
}
