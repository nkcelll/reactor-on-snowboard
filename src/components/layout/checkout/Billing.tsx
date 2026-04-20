import './styles/billing.css'
import { Link } from "react-router-dom"

export default function Billing() {
  return (
    <div className="billing-container">
      <div className="checkout-header">
        <h3 className="checkout-header-name">CHECKOUT</h3>
      </div>
      <div className="contact-section">
        <div className="contact-header">
          <h3>Contact</h3>
          <Link to='/login'>Login</Link>
        </div>
        <div className="email-info">
          <label htmlFor="email">Email Address</label>
          <input className='input-fields builling-inputs' type="text" />
        </div>
      </div>
      <div className="billing-section">
        <div className="contact-header">
          <h3>Billing</h3>
        </div>
        <form action="">
          <div className="fields-billing">
            <label htmlFor="firstName">First Name</label>
            <input className='input-fields' type="text" required/>
          </div>
          <div className="fields-billing">
            <label htmlFor="firstName">First Name</label>
            <input className='input-fields' type="text" required/>
          </div>
          <div className="fields-billing">
            <label htmlFor="firstName">First Name</label>
            <input className='input-fields' type="text" required/>
          </div>
          <div className="fields-billing">
            <label htmlFor="firstName">First Name</label>
            <input className='input-fields' type="text" required/>
          </div>
          <button type='submit' className='proceed-checkout-button'>Proceed Checkout</button>
        </form>
      </div>
      <button></button>
      <div className="privacy-policy-links">
        <Link to='/'>Refund Policy</Link>
        <Link to='/'>Shipping Policy</Link>
        <Link to='/'>Privacy Policy</Link>
        <Link to='/'>Terms of Service</Link>
      </div>
    </div>
  )
}