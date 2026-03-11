import './perProduct.css';
import {ProductImages, PerProductMainInfo, ProductDetails, AdditionalInformation, Recommend } from './index'
import { usePerProductFetch } from './hook/index';
// import { useState } from 'react';


export default function PerProductLayout() {
  const [perProduct, isLoading, error] = usePerProductFetch()
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  
  return (
    <div className="per-product-layout-container">
      <div className="product-container">
        <ProductImages
        images = {perProduct?.images || []}
        />
        <PerProductMainInfo/>
      </div>
        <ProductDetails/>
        <AdditionalInformation/>
        <Recommend/>
    </div>
  );
}
