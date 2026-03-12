import './checkout.css'
import {Billing, Order} from './index'

export default function Checkout() {
  return (
    <div className="checkout-container">
      <Billing/>
      <Order/>
    </div>
  )
}