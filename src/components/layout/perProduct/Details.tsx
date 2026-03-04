import './styles/productDetails.css';
// import IconArrowDown from '@/assets/icons/IconArrowDown';
export default function Details() {
  return (
    <div className="product-details">
      <div className="snowboard-information">
          <span className="terrain-map-text">Terrain Map</span>
        <div className="terrain-container">
            <span>Park</span>
          <div className="terrain-info">
            <div className="box-info-park">
              <span>7</span>
            </div>
          </div>
        </div>
        <div className="terrain-container">
            <span>All Mountain</span>
          <div className="terrain-info">
            <div className="box-info-all-mountain">
              <span>7</span>
            </div>
          </div>
        </div>
        <div className="terrain-container">
            <span>POW</span>
          <div className="terrain-info">
            <div className="box-info-pow">
              <span>7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
