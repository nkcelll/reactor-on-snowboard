import './styles/productDetails.css';
// import IconArrowDown from '@/assets/icons/IconArrowDown'
import { Details } from './index';

export default function ProductDetails() {
  return (
    <div className="product-details-container">
      <Details />
      {/* <div className="specs detail">
        <button>Specs</button>
        <IconArrowDown/>

      </div>
      <div className="features detail">
        <button>Features</button>
        <IconArrowDown/>
      </div> */}
      <div className="characteristics">
        <span className="span-characteristics">Characteristics</span>
        <div className="terrain-customer">
          <div className="joyful-hard characteristic-name-box">
            <span>Easy</span>
            <span>Hard</span>
          </div>
          <div className="joyful-hard-rating terrain-info">
            <div className="joyful-hard rating-box">
              <span>6</span>
            </div>
          </div>
        </div>
        <div className="adjustability-customer">
          <span>Adjustability</span>
          <div className="min-max-adjust-container">
            <div className="joyful-hard characteristic-name-box">
              <span>Min</span>
              <span>Max</span>
            </div>
            <div className="joyful-hard-rating">
              <div className="rating-box">
                <span>6</span>
              </div>
            </div>
          </div>
        </div>
        <div className="overal-rating">
          <span>Overall 5.9</span>
        </div>
      </div>
    </div>
  );
}
