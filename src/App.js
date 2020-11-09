import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Route, BrowserRouter} from 'react-router-dom'

import LoginPage from './content/account/Login.account'
import AdminPage from './content/admin/Main.admin'
import ShopPage from './content/shop/Main.shop'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ShopPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/admin" component={AdminPage} />
    </BrowserRouter>
  );
}

export default App;
