import '../../styles/productDetails.css';
// import IconArrowDown from '@/assets/icons/IconArrowDown';
import type { TerrainMap } from '../../types';
interface TerrainEndpoint {
  terrainMap: TerrainMap;
}

export default function Details({ terrainMap }: TerrainEndpoint) {
  // const a = Object.entries(terrainMap).map(item => item)
  // console.log(a);
  if(!terrainMap) return
  return (
    <>
      {/* <div className="product-details">
        <div className="snowboard-information">
          <span className="terrain-map-text">Terrain Map</span>
          {Object.entries(terrainMap).map(([item, value]) => (
            <div className="terrain-container">
              <span>{item}</span>
              <div className="terrain-info">
                <div
                  className="box-info-park box-map-character-border-control"
                  style={{ width: `${parseInt(value)}0%` }}
                >
                  <span>{item[0]}</span>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div> */}
      {terrainMap && <div className="product-details">
      <div className="snowboard-information">
          <span className="terrain-map-text">Terrain Map</span>
        <div className="terrain-container">
            <span className='terrain-name-span'>Park</span>
          <div className="terrain-info">
            <div className="box-info-park box-map-character-border-control" style={{width: `${parseInt(terrainMap.park)}0%`}}>
              <span>{terrainMap.park}</span>
            </div>
          </div>
        </div>
        <div className="terrain-container">
            <span className='terrain-name-span'>All Mountain</span>
          <div className="terrain-info">
            <div className="box-info-all-mountain box-map-character-border-control" style={{width: `${parseInt(terrainMap.allMountain)}0%`}}>
              <span>{terrainMap.allMountain}</span>
            </div>
          </div>
        </div>
        <div className="terrain-container">
            <span className='terrain-name-span'>POW</span>
          <div className="terrain-info">
            <div className="box-info-pow box-map-character-border-control" style={{width: `${parseInt(terrainMap.pow)}0%`}}>
              <span>{terrainMap.pow}</span>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}
