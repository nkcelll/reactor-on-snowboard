import type { Product } from "./ProductsGrid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";


interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  const [imgIndex, setImgIndex] = useState(0);

  const {id} = useParams()
  const category = id
  // console.log(item);
  
  return (
    <div key={item.key} id={item.id} className="product-content">
      <Link to={`/products/${category}/product/id=${item.id}`} className="img-item-link">
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