import {
  IconCart,
  IconClose,
  IconRemoveTrash,
  IconCartEmpty,
} from '@/assets/icons';
import { Link } from 'react-router-dom';
import '../shared/sideBox/sideBox.css';
import SideBox from '../shared/sideBox/SideBox';
import { useCart } from '@/context/cart/cartContext';

import { useState } from 'react';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);

  const emptyCart = (
    <div className="empty-cart">
      <h3>Your cart is empty...</h3>
      <IconCartEmpty />
    </div>
  );

  const header = (
    <div className="box-header cart-head box-flex">
      <h3>Your Cart</h3>
      <button onClick={close}>
        <IconClose />
      </button>
    </div>
  );

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const estimatedTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const footer = (
    <section className="box-footer box-footer-checkout">
      <div className="estimated-price box-flex">
        <span>Estimated Total:</span>
        <span>{estimatedTotal.toFixed(2)}$</span>
      </div>
      <div className="checkout">
        <Link to="/checkout">Checkout</Link>
      </div>
    </section>
  );

  return (
    <>
      {totalQuantity > 0 && (
        <div className="quantity-ident-cart">{totalQuantity}</div>
      )}
      <SideBox
        isVisible={isVisible}
        open={open}
        close={close}
        trigger={<IconCart />}
        header={header}
        footer={footer}
        className="cart_container"
      >
        {/* emptyCart */}
        <section className="product-total ">
          <h4>Products</h4>
          <h4>Total</h4>
        </section>
        <section className="product-wrap">
          {cart.length === 0
            ? emptyCart
            : cart.map((item) => (
                <div key={item.id} className="product-list">
                  <img
                    className="product-img"
                    src={item.image}
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0jENPXob1kALvKa4pBt4c9WokDKrukdtQ&s"
                    alt="Product Image"
                  />
                  <div className="item-name_info">
                    <span>{item.name}</span>
                    <span>Size: {item.size}</span>
                    <span>Quantity: {item.quantity}</span>
                  </div>
                  <div className="item-price_del">
                    <span>{item.price}$</span>
                    <button onClick={() => removeFromCart(item.id, item.size)}>
                      <IconRemoveTrash />
                    </button>
                  </div>
                </div>
              ))}
        </section>
      </SideBox>
    </>

    // <SideBox
    //   isVisible={isVisible}
    //   open={open}
    //   close={close}
    //   trigger={<IconCart />}
    //   header={header}
    //   footer={footer}
    //   className="cart_container"
    // >
    //   {/* emptyCart */}
    //   <section className="product-total ">
    //     <h4>Products</h4>
    //     <h4>Total</h4>
    //   </section>
    //   <section className="product-wrap">
    //     <div className="product-list">
    //       <img
    //         className="product-img"
    //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0jENPXob1kALvKa4pBt4c9WokDKrukdtQ&s"
    //         alt="Product Image"
    //       />
    //       <div className="item-name_info">
    //         <span>Surfer</span>
    //         <span>Size: 150</span>
    //         <span>Quantity: 1</span>
    //       </div>
    //       <div className="item-price_del">
    //         <span>499.99$</span>
    //         <button>
    //           <IconRemoveTrash />
    //         </button>
    //       </div>
    //     </div>
    //   </section>
    // </SideBox>
  );
}
