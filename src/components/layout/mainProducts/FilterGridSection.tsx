import GridCenterIcons from "./GridCenterIcons"

import FilterSort from "./FilterSort"
import './mainProducts.css';
export default function FilterGridSection() {
  return (
    <div id="filter-grid_section">
        <span id="total-products">10 Products</span>
        <GridCenterIcons/>
        <FilterSort/>
    </div>
  )
}