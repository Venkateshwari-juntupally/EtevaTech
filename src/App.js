import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ProductsList from './Components/ProductsList/ProductsList';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Router className='App-header'>
        <Header/>
      <Routes>
        <Route exact path="/" Component={ProductsList} />
        <Route path="/product/:id" Component={ProductDetails}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;






