import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Cart</h1>
      <ul className="flex flex-wrap justify-center">
        <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
          <h2 className="text-2xl font-bold">Product 1</h2>
          <p className="text-gray-600">$10.99</p>
        </li>
        <li className="w-1/2 md:w-1/3 xl:w-1/4 p-4">
          <h2 className="text-2xl font-bold">Product 2</h2>
          <p className="text-gray-600">$9.99</p>
        </li>
      </ul>
      <p className="text-gray-600">Subtotal: $20.98</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Checkout
      </button>
    </div>
  );
};

export default Cart;