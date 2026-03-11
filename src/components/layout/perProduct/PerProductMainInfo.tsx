import { IconMinus, IconPlus } from '@/assets/icons';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function PerProductsMainInfo() {
  const [product, setProduct] = useState({})
  const {category, productId} = useParams()
  // const [searchParams] = useSearchParams()
  // const productId = searchParams.get('id')
  console.log(category, productId);
  

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     // const paramId = id
  //     const response = await fetch(`https://reactor-on-snowboard-server.onrender.com/api/mainproducts/${category}/${}`)
  //   }
  //   fetchProduct()
  // })
  

  return (
    <div className="main-product">
      <h1>Bataleon Ecko Mode</h1>
      <span className="price">Price: - $400.99</span>
      <div className="size-input-fields-container">
        <span className="choose-size">Select Size:</span>
        <div className="size-input-fields">
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
      </div>
      <span>
        Built for steep lines, deep days and powerful all-terrain riding. Built
        for steep lines, deep days and powerful all-terrain riding. Built for
        steep lines, deep days and powerful all-terrain riding.
      </span>
      <div className="amount-container">
        <span>Amount:</span>
        <div className="amount-product">
          <button type="button">
            <IconMinus />
          </button>
          <button>1</button>
          <button type="button">
            <IconPlus />
          </button>
        </div>
      </div>
      <div className="add-to-cart-button">
        <button id="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
}
