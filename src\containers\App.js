import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;