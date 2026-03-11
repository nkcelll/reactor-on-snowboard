import '../../../shared/sideBox/sideBox.css';

import ProductCard from './ProductCard';
import NotFound from '@/components/shared/notFound/NotFound';
import FilterProductsGrid from './FilterProductsGrid';
export interface Product {
  key: string;
  id: string,
  name: string;
  price: number;
  images?: string[];
  image?: string;
  salePrice?: number;
}

interface ProductsGridProps {
  onGridView: number;
  products: Product[];
}

export default function ProductsGrid({
  onGridView,
  products,
}: ProductsGridProps) {
  
  return (
    <div className="main-content-container">
      <FilterProductsGrid />
      {products.length === 0 ? (
        <NotFound />
      ) : (
        <div
          className="grid-content"
          style={{ gridTemplateColumns: `repeat(${onGridView}, 1fr)` }}
        >
          {products.map((item, index) => (
            <ProductCard key={item.key || index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
