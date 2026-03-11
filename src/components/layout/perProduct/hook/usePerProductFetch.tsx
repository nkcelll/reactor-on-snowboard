import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import type { TerrainMap, CharacteristicsProps, ProductSpecs } from '../types';

interface PerProduct {
  availability: string,
  brand: string,
  id: string,
  images: string[],
  key: string;
  name: string,
  price: number,
  salePrice?: number,
  size?: string[],
  specs?: ProductSpecs
  terrainMap: TerrainMap,
  characteristics: CharacteristicsProps,
  overallRating: string
}

const usePerProductFetch = (): [PerProduct | undefined, boolean, string] => {
  const [product, setProduct] = useState<PerProduct>();
  const { category, productId } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      // const paramId = id
      try {
        const response = await fetch(
          `https://reactor-on-snowboard-server.onrender.com/api/mainproducts/${category}/${productId}`,
        );
        if (!response.ok) {
          throw new Error(`Error message status: ${response.status} `);
        }
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Something went wrong');
        }
      } finally {
        setIsLoading(false)
      }
    };
    fetchProduct();
  }, [category, productId]);
  return [product, isLoading, error];
};

export default usePerProductFetch;
