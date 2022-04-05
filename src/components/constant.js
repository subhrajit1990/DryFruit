import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import ProductsList from './ProductList';
import ProductPage from './ProductPage';
import App from './App';
export const routes = (
    <Routes>
	    <Route exact path="/" element={<Home/>}/>
	    <Route  path="/Contact" element={<Contact/>}/>
	    <Route  path="/About" element={<About/>}/>
	    <Route  name="ProductPage" path="/ProductPage" element={<ProductPage/>} />
  	</Routes>

);