import { IconMinus, IconPlus } from '@/assets/icons';
// import { useState, useEffect } from 'react';
// import { useParams} from 'react-router-dom';

export default function PerProductsMainInfo() {
  // const [product, setProduct] = useState({});
  // const { category, productId } = useParams();
  // const [error, setError] = useState('')
  // console.log(product);
  

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     // const paramId = id
  //     try {
  //       const response = await fetch(
  //         `https://reactor-on-snowboard-server.onrender.com/api/mainproducts/${category}/${productId}`,
  //       );
  //       if(!response.ok) {
  //         throw new Error(`Error message status: ${response.status} `)
  //       }
  //       const result = await response.json();
  //       setProduct(result)
  //     } catch (error) {
  //       if(error instanceof Error) {
  //         setError(error.message)
  //       } else {
  //         setError('Something went wrong')
  //       }
  //     }
      
  //   };
  //   fetchProduct();
  // },[category, productId]);

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
