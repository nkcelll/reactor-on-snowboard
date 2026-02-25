import GridCenterIcons from "./GridCenterIcons"

import FilterSort from "./FilterSort"
import './mainProducts.css';

import type { Product } from './products/ProductsGrid';

interface FilterGridProps {
  onGridChange: (cols: number) => void;
  activeGrid?: number
  products: Product[]
}

export default function FilterGridSection({ onGridChange, activeGrid, products }: FilterGridProps) {
  console.log(products);
  
  return (
    <div id="filter-grid_section">
        <span id="total-products">{products.length} Products</span>
        <GridCenterIcons onGridChange={onGridChange} activeGrid={activeGrid}/>
        <FilterSort/>
    </div>
  )
}