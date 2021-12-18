import React from "react";
import CartsList from "../lists/CartsList";
const CartsView = ({ data , OnPress , OnPress2 , email}) => {
    return   <CartsList 
    OnPress={OnPress} 
    OnPress2={OnPress2}
    fontFamily={{fontFamily:'FontThree'}} 
    title="Cart" 
    data={data}
    email={email}
     />;
};
export default CartsView;
