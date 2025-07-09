import React from 'react';
import products from '../data/products';

const ProductList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Products</h1>
      <ul className="flex flex-wrap justify-center">
        {products.map((product) => (
          <li key={product.id} className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;