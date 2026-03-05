import './perProduct.css';
import {ProductImages, PerProductMainInfo, ProductDetails, AdditionalInformation} from './index'

export default function PerProductLayout() {
  return (
    <div className="per-product-layout-container">
      <div className="product-container">
        <ProductImages/>
        <PerProductMainInfo/>
      </div>
        <ProductDetails/>
        <AdditionalInformation/>
        
    </div>
  );
}
