import './mainProducts.css';
import ProductsLoading from '@/components/shared/loading/ProductsLoading';
import {
  GifTop,
  FilterGridSection,
  ProductsGrid,
  LoadMoreContent,
} from './index';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from './products/ProductsGrid';

export default function MainProducts() {
  const { id } = useParams();
  const [gridColumnView, setGridColumnView] = useState<number>(() => {
    const saved = localStorage.getItem('grid-row');
    return saved ? JSON.parse(saved) : 4;
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((resp) => resp.json())
      .then((data: Record<string, Product[]>) => {
        const firstArray = Object.values(data).find(Array.isArray) as Product[] | undefined;
        if (firstArray) setProducts(firstArray);
        setTimeout(() => setIsLoading(false), 1);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  const toggleGridView = (columns: number) => {
    setGridColumnView(columns);
    localStorage.setItem('grid-row', JSON.stringify(columns));
  };

  const sectionName = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Products'

  return (
    <div>
      <GifTop />
      <section className="flexBox product-section_name">
        <span>{sectionName}</span>
      </section>

      <ProductsLoading isLoading={isLoading} />

      {!isLoading && (
        <>
          <FilterGridSection
            onGridChange={toggleGridView}
            activeGrid={gridColumnView}
            products={products}
          />
          <ProductsGrid
            key={id}
            onGridView={gridColumnView}
            products={products}
          />
          <LoadMoreContent products={products} />
        </>
      )}
    </div>
  );
}