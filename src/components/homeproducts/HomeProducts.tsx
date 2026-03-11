import './home.css';

import dataHome from '../../../server/services/collection/home/dataHome.json';
import useSmoothHorizontalScroll from '../shared/ScrollAnime';
import { useRef } from 'react';
import { Link, } from 'react-router-dom';

export default function HomeProducts() {
  const containerRef = useRef<HTMLElement>(null);
  
  useSmoothHorizontalScroll(containerRef as React.RefObject<HTMLElement>);

  const products = Object.values(dataHome.data);

  const productsHome = products.map((item) => {
    const postersSrc = item.posters?.[0].poster;
    return (
      <div key={item.key} className="product-poster-card">
        <Link to={`/products/${item.key}`}>
          <img className="product-poster" src={postersSrc} alt={item.title} />
          <span className="textBox">{item.title}</span>
        </Link>
      </div>
    );
  });
  return (
    <main ref={containerRef} id="home-container">
      {productsHome}
    </main>
  );
}
