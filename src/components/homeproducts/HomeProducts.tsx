import './home.css';

import dataHome from '../../../services/collection/home/dataHome.json';
import useSmoothHorizontalScroll from '../shared/ScrollAnime';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HomeProducts() {
  const containerRef = useRef<HTMLElement>(null);

  useSmoothHorizontalScroll(containerRef as React.RefObject<HTMLElement>);

  const products = Object.values(dataHome.data);

  const productsHome = products.map((item) => {
    const postersSrc = item.posters?.[0].poster;
    const titles = item.title;

    return (
      <div key={item.key} className="product-poster-card">
        <Link to='collection'>
          <img src={postersSrc} alt={item.title} />
        </Link>
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
