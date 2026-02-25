import ProductCard from './ProductCard';
import NotFound from '@/components/shared/notFound/NotFound';

export interface Product {
  key: string;
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
  console.log(products.map((item) => item));

  return (
    <>
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
    </>
  );
}
