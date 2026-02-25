import type { Product } from './ProductsGrid';

interface LoadMoreContentProps {
  products: Product[];
}

export default function LoadMoreContent({ products }: LoadMoreContentProps) {
  
  return (
    <>
      {products.length > 0 && (
        <div className="load-more-content">
          <button>Load More</button>
        </div>
      )}
    </>
  );
}
