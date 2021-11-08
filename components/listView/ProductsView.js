import React from "react";
import ProductsList from "../lists/ProductsList";
const ProductsView = ({ data , OnPress , OnPress2}) => {
    return   <ProductsList 
    OnPress={OnPress} 
    OnPress2={OnPress2}
    fontFamily={{fontFamily:'FontThree'}} 
    title="All Products" 
    data={data}
     />;
};

export default ProductsView;
