import './styles/order.css';
export default function Order() {
  return (
    <div className="order-container">
      <div className="checkout-header">
        <h3 className="checkout-header-name">YOUR ORDER</h3>
      </div>
      <div className="order-price-section">
        <div className="price-box">
          <h3>Subtotal</h3>
          <span className="order-price-span">400$</span>
        </div>
        <div className="price-box">
          <h3>Shipping</h3>
          <span className="order-price-span">400$</span>
        </div>
        <div className="price-box">
          <h3>Tax</h3>
          <span className="order-price-span">400$</span>
        </div>
      </div>
      <div className="total-price">
        <h3>Total</h3>
        <span>500$</span>
      </div>
    </div>
  );
}
