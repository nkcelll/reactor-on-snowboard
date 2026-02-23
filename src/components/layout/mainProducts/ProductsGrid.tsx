import snowboards from '../../../../services/collection/mainProducts/snowboards.json'
import { Link } from "react-router-dom"

interface ProductsGridProps {
  onGridView: number;
}
export default function ProductsGrid({onGridView}: ProductsGridProps) {
  

  
  const productItems = snowboards.snowboards.map((item) => {
    return (
      <div className="product-content">
        <Link to='/' className="img-item-link">
          <img className="img-g" src={item.images[0]} alt="" />
        </Link>
        <div className="item-info">
          <span className="product-name">{item.name}</span>
          <div className="item-info-price">
            <span className="product-price">{item.price}</span>
            <span className="product-price">{item.salePrice}</span>
          </div>
        </div>
      </div>
    )
  })

  return(
    <div className="grid-content" style={{gridTemplateColumns: `repeat(${onGridView}, 1fr`}}>
      {productItems}
    </div>
  )
}