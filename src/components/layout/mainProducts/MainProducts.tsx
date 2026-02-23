import './mainProducts.css';
import { GifTop, FilterGridSection, ProductsGrid} from './index';
import { useState, useEffect } from 'react';

export default function MainProducts() {
  const [gridColumnView, setGridColumnVuew] = useState<number>(() => {
    const savedGrid = localStorage.getItem('grid-row')
    return savedGrid !== null ? JSON.parse(savedGrid) : 4

  })
  const toggleGridView = (columns: number) => {
    setGridColumnVuew(columns)
  }
  


  // console.log(gridColumnView);
  useEffect(() => {
    localStorage.setItem('grid-row', JSON.stringify(gridColumnView))
  }, [gridColumnView])
  

  return (
    <div>
      <GifTop />
      <section className="flexBox product-section_name">
        <span>Snowboards</span>
      </section>
      <FilterGridSection onGridChange={toggleGridView} activeGrid={gridColumnView}/>
      <ProductsGrid onGridView={gridColumnView}/>
    </div>
  );
}
