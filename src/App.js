import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';
import PageNotFound from './component/PageNotFound';
import Modal from './component/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/Cart" component={Cart}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
      <Modal></Modal>
    </React.Fragment>
  );
}

export default App;
