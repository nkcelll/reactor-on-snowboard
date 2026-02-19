import IconCart from '../../assets/icons/IconCart';
import IconClose from '../../assets/icons/IconClose';
import IconRemoveTrash from '../../assets/icons/IconRemoveTrash';

import { useState } from 'react';

export default function Cart() {
  const [isVisible, setIsVisible] = useState(false)
  const open = () => setIsVisible(true)
  const close = () => setIsVisible(false)

  return (
    <div className="cart">
      <button onClick={open}>
        <IconCart />
      </button>
      <div className={`cart-overlay ${isVisible ? 'overlay-visible' : ''}`} onClick={close}></div>
      <div className={`cart-box ${isVisible ? 'cart-box_open' : ''}`}>
        <div className="cart-header cart-flex">
          <h3>Your Cart</h3>
          <button onClick={close}>
            <IconClose />
          </button>
        </div>
        <section className="product-total cart-flex">
          <h4>Products</h4>
          <h4>Total</h4>
        </section>
        <section className="product-wrap">
          <div className="product-list">
            <img className='product-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0jENPXob1kALvKa4pBt4c9WokDKrukdtQ&s" alt="Product Image" />
            <div className="item-name_info">
              <span>Surfer</span>
              <span>Size: 150</span>
              <span>Quantity: 1</span>
            </div>
            <div className="item-price_del">
              <span>499.99$</span>
              <button>
                <IconRemoveTrash/>
              </button>
            </div>
          </div>
          <div className="product-list">
            <img className='product-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0jENPXob1kALvKa4pBt4c9WokDKrukdtQ&s" alt="Product Image" />
            <div className="item-name_info">
              <span>Surfer</span>
              <span>Size: 150</span>
              <span>Quantity: 1</span>
            </div>
            <div className="item-price_del">
              <span>499.99$</span>
              <button>
                <IconRemoveTrash/>
              </button>
            </div>
          </div>
          <div className="product-list">
            <img className='product-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0jENPXob1kALvKa4pBt4c9WokDKrukdtQ&s" alt="Product Image" />
            <div className="item-name_info">
              <span>Surfer</span>
              <span>Size: 150</span>
              <span>Quantity: 1</span>
            </div>
            <div className="item-price_del">
              <span>499.99$</span>
              <button>
                <IconRemoveTrash/>
              </button>
            </div>
          </div>
          <div className="product-list">
            <img className='product-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0jENPXob1kALvKa4pBt4c9WokDKrukdtQ&s" alt="Product Image" />
            <div className="item-name_info">
              <span>Surfer</span>
              <span>Size: 150</span>
              <span>Quantity: 1</span>
            </div>
            <div className="item-price_del">
              <span>499.99$</span>
              <button>
                <IconRemoveTrash/>
              </button>
            </div>
          </div>
          <div className="product-list">
            <img className='product-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0jENPXob1kALvKa4pBt4c9WokDKrukdtQ&s" alt="Product Image" />
            <div className="item-name_info">
              <span>Surfer</span>
              <span>Size: 150</span>
              <span>Quantity: 1</span>
            </div>
            <div className="item-price_del">
              <span>499.99$</span>
              <button>
                <IconRemoveTrash/>
              </button>
            </div>
          </div>
        </section>
        <section className="cart-footer">
          <div className="estimated-price cart-flex">
            <h5>Estimated Total:</h5>
            <h5>499.99$</h5>
          </div>
          <div className="checkout">
            <a href="/">Checkout</a>
          </div>
        </section>
      </div>
    </div>
  );
}
