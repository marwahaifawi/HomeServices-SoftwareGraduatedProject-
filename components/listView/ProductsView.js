import React from "react";
import ProductsList from "../lists/ProductsList";
import * as Animatable from 'react-native-animatable';

const ProductsView = ({ data , OnPress}) => {
    return   <ProductsList 
    OnPress={OnPress}  
    fontFamily={{fontFamily:'FontThree'}} 
    title="All Products" 
    data={data}
     />;
};

export default ProductsView;
