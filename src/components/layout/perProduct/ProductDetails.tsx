import './styles/productDetails.css';
import { Details, Characteristics } from './index';
import type { TerrainMap, CharacteristicsProps } from './types';

interface ProductDetailProps {
  terrainMap: TerrainMap;
  characteristics: CharacteristicsProps;
  overallRating: string;
}

export default function ProductDetails({
  terrainMap,
  characteristics,
  overallRating,
}: ProductDetailProps) {

  return (
    <div className="product-details-container">
      <Details terrainMap={terrainMap} />
      <Characteristics
        characteristics={characteristics}
        overallRating={overallRating}
      />
    </div>
  );
}
