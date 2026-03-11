import { IconMinus, IconPlus } from '@/assets/icons';
import { useState } from 'react';
// import { useParams} from 'react-router-dom';

interface ProductMainInfo {
  availability: string;
  brand: string;
  name: string;
  price: number;
  salePrice?: number;
  size?: string[];
}

export default function PerProductsMainInfo({
  availability,
  brand,
  name,
  price,
  salePrice,
  size,
}: ProductMainInfo) {
  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const inStock = availability === 'In Stock';
  // console.log(size);

  return (
    <div className="main-product">
      <h1>{name}</h1>
      <h3>Brand: {brand}</h3>
      <span className="availability">{availability}</span>
      <span className={salePrice ? 'price-on-sale' : 'price'}>
        Price - $ {price}
      </span>
      {/* <span className={"price"}>{`Price: - ${salePrice ? price : salePrice}`}</span> */}
      {salePrice && <span className="price">Sale: - $ {salePrice}</span>}
      {inStock && (
        <div className="size-input-fields-container">
          <span className="choose-size">Select Size:</span>
          {size?.map((s, index) => (
            <div key={index} className="size-input-fields">
              <input type="radio" />
              <label htmlFor="">{s}</label>
            </div>
          ))}
        </div>
      )}
      <span>
        Built for steep lines, deep days and powerful all-terrain riding. Built
        for steep lines, deep days and powerful all-terrain riding. Built for
        steep lines, deep days and powerful all-terrain riding.
      </span>
      {inStock && (
        <>
          <div className="amount-container">
            <span>Amount:</span>
            <div className="amount-product">
              <button type="button" onClick={decrement}>
                <IconMinus />
              </button>
              <span className="amount-count">{count}</span>
              <button type="button" onClick={increment}>
                <IconPlus />
              </button>
            </div>
          </div>
          <div className="add-to-cart-button">
            <button id="add-to-cart">Add to cart</button>
          </div>
        </>
      )}
    </div>
  );
}
