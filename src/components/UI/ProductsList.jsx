

import React from 'react'
import ProductCard from './ProductCard';

const ProductsList = ({data}) => {
  return (
    <>
    {data?.map((item, key) => (
        <ProductCard item={item} key={key} />
        ))}
    </>
  );
}

export default ProductsList