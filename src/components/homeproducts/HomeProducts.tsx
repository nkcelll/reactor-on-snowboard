import './home.css';

import dataHome from '../../../services/collection/home/dataHome.json';
import useSmoothHorizontalScroll from '../shared/ScrollAnime';
import { useRef } from 'react';

export default function HomeProducts() {
  const containerRef = useRef<HTMLElement | null>(null);

  useSmoothHorizontalScroll(containerRef)

  const products = Object.values(dataHome.data);

  const productsHome = products.map((item) => {
    const postersSrc = item.posters?.[0].poster;
    const titles = item.title;

    return (
      <div key={item.key} className="product-poster-card">
        <a href={item.href}>
          <img src={postersSrc} alt={item.title} />
        </a>
        <div className="textBox">
          <span>{titles}</span>
        </div>
      </div>
    );
  });
  return (
    <main ref={containerRef} id="home-container">
      {productsHome}
    </main>
  );
}
