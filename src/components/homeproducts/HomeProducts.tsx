import './home.css';
import useSmoothHorizontalScroll from '../shared/ScrollAnime';
import ProductsLoading from '../shared/loading/ProductsLoading';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ProductsArray {
  key: string;
  title: string;
  href: string;
  posters: { poster: string }[];
}

export default function HomeProducts() {
  const [homeProducts, setHomeProducts] = useState<Record<
    string,
    ProductsArray
  > | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const containerRef = useRef<HTMLElement>(null);

  useSmoothHorizontalScroll(
    containerRef as React.RefObject<HTMLElement>,
    isLoading,
  );

  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const response = await fetch(
          'https://reactor-on-snowboard-server.onrender.com/api/home/dataHome',
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setHomeProducts(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Something went wrong');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchHomeProducts();
  }, []);

  if (error) {
    return <div className="error-message-container">{error}</div>;
  }

  const products = homeProducts ? Object.values(homeProducts.data) : [];

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
    <>
      {isLoading ? (
        <ProductsLoading isLoading={isLoading} />
      ) : (
        <main ref={containerRef} id="home-container">
          {productsHome}
        </main>
      )}
    </>
  );
}
