import { Link } from "react-router-dom";
import { useState } from "react";
import type { Product } from "./ProductsGrid";

interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  // Each card tracks its own image index (0 or 1)
  const [imgIndex, setImgIndex] = useState(0);
  
  // console.log(item);
  
  return (
    <div key={item.key} className="product-content">
      <Link to="/products/product" className="img-item-link">
        <img
          onMouseEnter={() => setImgIndex(1)}
          onMouseLeave={() => setImgIndex(0)}
          className="img-g"
          // If images[1] doesn't exist, it falls back to images[0]
          src={item?.images?.[imgIndex] || item.image || ''}
          alt={item.name}
        />
      </Link>
      <div className="item-info">
        <span className="product-name">{item.name}</span>
        <div className="item-info-price">
          <span className="product-price">$ {item.price}</span>
          {item.salePrice && (
            <span className="product-price sale">$ {item.salePrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}