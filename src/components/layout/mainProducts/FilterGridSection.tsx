import GridCenterIcons from "./GridCenterIcons"

import FilterSort from "./FilterSort"
import './mainProducts.css';

interface FilterGridProps {
  onGridChange: (cols: number) => void;
  activeGrid?: number
  productLength: number
}

export default function FilterGridSection({ onGridChange, activeGrid, productLength }: FilterGridProps) {
  console.log(productLength);
  
  return (
    <div id="filter-grid_section">
        <span id="total-products">{productLength} Products</span>
        <GridCenterIcons onGridChange={onGridChange} activeGrid={activeGrid}/>
        <FilterSort/>
    </div>
  )
}