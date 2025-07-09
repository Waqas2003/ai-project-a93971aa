import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ecommerce Website</h1>
        <ul className="flex justify-end">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;