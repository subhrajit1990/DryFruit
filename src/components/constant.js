import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import ProductsList from './ProductList';
import ProductPageInterceptor from './ProductPageInterceptor';
import ProductList from './ProductList';
import ProductPage from './ProductPage';
import Cart from './Cart';
import App from './App';

export const routes = (
    <Routes>
	    <Route  path="/" element={<Home />}/>
	    <Route  path="/Contact" element={<Contact />}/>
	    <Route  path="/About" element={<About />}/>
	    <Route  path="/ProductList" element={<ProductList />} />
	    <Route  end name="ProductPageInterceptor" path="/ProductPageInterceptor" element={<ProductPageInterceptor />} />
	    <Route  end name="ProductPage" path="/ProductPage" element={<ProductPage />} />
	    <Route  end name="Cart" path="/Cart" element={<Cart />} />
  	</Routes>
);