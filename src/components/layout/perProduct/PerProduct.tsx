import './perProduct.css';
import {
  ProductImages,
  PerProductMainInfo,
  ProductDetails,
  AdditionalInformation,
  // Recommend,
} from './index';
import { usePerProductFetch } from './hook/index';

export default function PerProductLayout() {
  const [perProduct, isLoading, error] = usePerProductFetch();
  console.log(perProduct);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!perProduct) return;
  return (
    <div className="per-product-layout-container">
      <div className="product-container">
        <ProductImages images={perProduct?.images || []} />
        <PerProductMainInfo
          key={perProduct.id}
          availability={perProduct?.availability}
          brand={perProduct?.brand}
          name={perProduct.name}
          price={perProduct.price}
          salePrice={perProduct?.salePrice}
          size={perProduct?.size}
        />
      </div>
      <ProductDetails 
        terrainMap={perProduct.terrainMap}
        characteristics={perProduct.characteristics}
        overallRating={perProduct.overallRating}
      />
      <AdditionalInformation 
        specs={perProduct.specs}
      />
      {/* <Recommend /> */}
    </div>
  );
}
