import './mainProducts.css';
import snowboards from '../../../../services/collection/mainProducts/snowboards.json'
import { GifTop, FilterGridSection, ProductsGrid, LoadMoreContent} from './index';
import { useState, useEffect } from 'react';

export default function MainProducts() {
  const [gridColumnView, setGridColumnVuew] = useState<number>(() => {
    const savedGrid = localStorage.getItem('grid-row')
    return savedGrid !== null ? JSON.parse(savedGrid) : 4

  })
  const toggleGridView = (columns: number) => {
    setGridColumnVuew(columns)
  }

  useEffect(() => {
    localStorage.setItem('grid-row', JSON.stringify(gridColumnView))
  }, [gridColumnView])

  console.log(snowboards);
  
  

  return (
    <div>
      <GifTop />
      <section className="flexBox product-section_name">
        <span>Snowboards</span>
      </section>
      <FilterGridSection onGridChange={toggleGridView} activeGrid={gridColumnView} productLength={snowboards.snowboards.length}/>
      <ProductsGrid onGridView={gridColumnView} products={snowboards.snowboards} />
      <LoadMoreContent />
    </div>
  );
}
