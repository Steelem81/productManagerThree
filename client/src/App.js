import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/products/:id" element={<ProductDetail/>}  />
          <Route path="/products/edit/:id"  element={<UpdateProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
