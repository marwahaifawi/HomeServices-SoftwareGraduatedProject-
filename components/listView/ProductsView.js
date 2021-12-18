import React from "react";
import ProductsList from "../lists/ProductsList";
const ProductsView = ({ data , OnPress , OnPress2 ,email}) => {
    return   <ProductsList 
    OnPress={OnPress} 
    OnPress2={OnPress2}
    fontFamily={{fontFamily:'FontThree'}} 
    title="All Products" 
    data={data}
    email={email}
     />;
};
export default ProductsView;
