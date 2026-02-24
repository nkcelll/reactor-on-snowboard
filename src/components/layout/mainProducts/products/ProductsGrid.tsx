import ProductCard from './ProductCard';

export interface Product {
  key: string; 
  name: string;
  price: number;
  images: string[];
  salePrice?: number;
}

interface ProductsGridProps {
  onGridView: number;
  products: Product[];
}

interface ProductsGridProps {
  onGridView: number;
  products: Product[];
}
export default function ProductsGrid({
  onGridView,
  products,
}: ProductsGridProps) {
  // const productItems = products.map((item, index) => {

  //   console.log(index)
  //     const onMouseEnter = () => {
  //       // setImgChange(1)
  //     }
  //     const onMouseLEave = () => {
  //       // setImgChange(0)
  //     }

  //   return (
  //     <div className="product-content">
  //       <Link to='/' className="img-item-link">
  //         <img
  //         onMouseEnter={onMouseEnter}
  //         onMouseLeave={onMouseLEave}
  //         className="img-g"
  //         src={item.images[imgChange]}
  //         alt="" />
  //       </Link>
  //       <div className="item-info">
  //         <span className="product-name">{item.name}</span>
  //         <div className="item-info-price">
  //           <span className="product-price">$ {item.price}</span>
  //           {item.salePrice && <span className="product-price">$ {item.salePrice}</span>}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  return (
    <div
      className="grid-content"
      style={{ gridTemplateColumns: `repeat(${onGridView}, 1fr` }}
    >
      {products.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
}
