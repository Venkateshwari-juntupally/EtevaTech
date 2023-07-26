// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';
import './App.css'

const products = [
  {id: 1, name: 'Samsung Galaxy S20', price: 34999, image: 'https://m.media-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg'},
  {id: 2, name: 'Wheeling System Luggage', price: 1999, image: 'https://m.media-amazon.com/images/I/514xUT1xYVL._UL1500_.jpg'},
  {id: 3, name: 'Jam & Honey Dino, Magenta, 22 cm', price: 299, image: 'https://m.media-amazon.com/images/I/81IU5lZIRwL._SX450_.jpg'},
  {id: 4, name: 'HD Display Smart Watch', price: 34999, image: 'https://m.media-amazon.com/images/I/610FbWpQu-L._SY450_.jpg'},
  {id: 5, name: 'Peter England Men Regular Fit Blazer', price: 34999, image: 'https://m.media-amazon.com/images/I/513wNYojOqL._UY741_.jpg'},
  {id: 6, name: 'Kadio Analog Wall Clock', price: 799, image: 'https://rukminim2.flixcart.com/image/416/416/l2rwzgw0/wall-clock/r/v/q/classic-designer-108-cola-analog-kadio-original-imagef8f9spcsuk8.jpeg?q=70'},
  {id: 7, name: 'VINCENT CHASE EYEWEAR', price: 678, image: 'https://m.media-amazon.com/images/I/41bSyL5qiJS._UL1325_.jpg'},
  {id: 8, name: 'Kisna Real Solitaire Diamond & Gold Ring for Women', price: 27083, image: 'https://m.media-amazon.com/images/I/51vfAr3yiBL._UY575_.jpg'},
  {id: 9, name: 'Kurta Pant With Dupatta Set', price: 1499, image: 'https://m.media-amazon.com/images/I/81qC3sQyRDL._UY741_.jpg'},
  {id: 10, name: 'Canon EOS M50 Mark', price: 58999, image: 'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70'},
  {id: 11, name: 'Full Face Graphic Helmet', price: 2379, image: 'https://rukminim2.flixcart.com/image/416/416/khmbafk0-0/helmet/x/t/m/sbh-17-terminator-full-face-graphic-helmet-in-matt-black-fluo-original-imafxhedgn57jgvd.jpeg?q=70'},
  {id: 12, name: 'Running horses Painting', price: 999, image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/painting/l/m/8/11-1-sanfk173-saf-original-imagm8ysu4pjcnnx.jpeg?q=70'}
];


const App = () => {
  
  return (
    <div className='container'>
      <Router className='App-header'>
      <Routes>
        <Route path="/" element={<ProductsList products={products} />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
    </div>
    
  );
};

export default App;






