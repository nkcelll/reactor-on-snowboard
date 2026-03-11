import './styles/productDetails.css';
// import IconArrowDown from '@/assets/icons/IconArrowDown'
import { Details, Characteristics } from './index';
import type { TerrainMap, CharacteristicsProps} from './types';

interface ProductDetailProps {
  terrainMap: TerrainMap,
  characteristics: CharacteristicsProps
}

export default function ProductDetails({terrainMap, characteristics}: ProductDetailProps) {
  // console.log(terrainMap,characteristics);
  
  return (
    <div className="product-details-container">
      <Details
        terrainMap ={terrainMap}
      />
      <Characteristics
        characteristics={characteristics}
      />
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
