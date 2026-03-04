import { IconMinus, IconPlus } from '@/assets/icons';

export default function PerProductsMainInfo() {
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
