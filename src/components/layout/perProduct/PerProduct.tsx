import './perProduct.css';
import {ProductImages, PerProductMainInfo} from './index'

export default function PerProductLayout() {
  return (
    <div className="per-product-layout-container">
      <div className="product-container">
        <ProductImages/>
        <PerProductMainInfo/>
      </div>
    </div>
  );
}
