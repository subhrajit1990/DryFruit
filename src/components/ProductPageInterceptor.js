import { useLocation } from "react-router-dom";
import React from 'react';
import ProductPage from './ProductPage';

export default function ProductPageInterceptor() {
  let location = useLocation();
  return (
    <>
        <ProductPage  dataprops={location.state}/>
    </>
  );
}
