import './styles/productDetails.css';
// import IconArrowDown from '@/assets/icons/IconArrowDown'
import { Details, Characteristics } from './index';

export default function ProductDetails() {
  return (
    <div className="product-details-container">
      <Details />
      <Characteristics/>
      {/* <div className="specs detail">
        <button>Specs</button>
        <IconArrowDown/>

      </div>
      <div className="features detail">
        <button>Features</button>
        <IconArrowDown/>
      </div> */}
      
    </div>
  );
}
