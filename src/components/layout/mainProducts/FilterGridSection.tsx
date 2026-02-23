import GridCenterIcons from "./GridCenterIcons"

import FilterSort from "./FilterSort"
import './mainProducts.css';

interface FilterGridProps {
  onGridChange: (cols: number) => void;
  activeGrid?: number
}

export default function FilterGridSection({ onGridChange, activeGrid }: FilterGridProps) {
  return (
    <div id="filter-grid_section">
        <span id="total-products">10 Products</span>
        <GridCenterIcons onGridChange={onGridChange} activeGrid={activeGrid}/>
        <FilterSort/>
    </div>
  )
}