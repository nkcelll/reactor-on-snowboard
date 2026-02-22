import { IconCart, IconClose, IconRemoveTrash } from '@/assets/icons';
import { Link } from 'react-router-dom';
import '../shared/sideBox/sideBox.css';
import SideBox from '../shared/sideBox/SideBox';

import { useState } from 'react';

export default function Cart() {
  const [isVisible, setIsVisible] = useState(false);
  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);

  const header = (
    <div className="box-header cart-head box-flex">
      <h3>Your Cart</h3>
      <button onClick={close}>
        <IconClose />
      </button>
    </div>
  );

  const footer = (
    <section className="box-footer box-footer-checkout">
      <div className="estimated-price box-flex">
        <span>Estimated Total:</span>
        <span>499.99$</span>
      </div>
      <div className="checkout">
        <Link to="/">Checkout</Link>
      </div>
    </section>
  );

  return (
    <SideBox
      isVisible={isVisible}
      open={open}
      close={close}
      trigger={<IconCart />}
      header={header}
      footer={footer}
      className="cart_container"
    >
      <section className="product-total ">
        <h4>Products</h4>
        <h4>Total</h4>
      </section>
      <section className="product-wrap">
        <div className="product-list">
          <img
            className="product-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0jENPXob1kALvKa4pBt4c9WokDKrukdtQ&s"
            alt="Product Image"
          />
          <div className="item-name_info">
            <span>Surfer</span>
            <span>Size: 150</span>
            <span>Quantity: 1</span>
          </div>
          <div className="item-price_del">
            <span>499.99$</span>
            <button>
              <IconRemoveTrash />
            </button>
          </div>
        </div>
      </section>
    </SideBox>
  );
  // return (
  //   <div className="side-box">
  //     <button onClick={open}>
  //       <IconCart />
  //     </button>
  //     <Overlay
  //       isVisible={isVisible}
  //       close={close}
  //     />
  //     <div className={`box-container ${isVisible ? 'box_open' : ''}`}>
  //       <div className="box-header box-flex">
  //         <h3>Your Cart</h3>
  //         <button onClick={close}>
  //           <IconClose />
  //         </button>
  //       </div>
  //       <section className="product-total box-flex">
  //         <h4>Products</h4>
  //         <h4>Total</h4>
  //       </section>
  //       <section className="product-wrap">
  //         <div className="product-list">
  //           <img
  //             className="product-img"
  //             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0jENPXob1kALvKa4pBt4c9WokDKrukdtQ&s"
  //             alt="Product Image"
  //           />
  //           <div className="item-name_info">
  //             <span>Surfer</span>
  //             <span>Size: 150</span>
  //             <span>Quantity: 1</span>
  //           </div>
  //           <div className="item-price_del">
  //             <span>499.99$</span>
  //             <button>
  //               <IconRemoveTrash />
  //             </button>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="box-footer">
  //         <div className="estimated-price box-flex">
  //           <h5>Estimated Total:</h5>
  //           <h5>499.99$</h5>
  //         </div>
  //         <div className="checkout">
  //           <a href="/">Checkout</a>
  //         </div>
  //       </section>
  //     </div>
  //   </div>
  // );
}
