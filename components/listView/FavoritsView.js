import React from "react";
import FavoritesList from "../lists/FavoritesList";
const FavoritsView = ({ data , OnPress , OnPress2 , email}) => {
    return   <FavoritesList 
    OnPress={OnPress} 
    OnPress2={OnPress2}
    fontFamily={{fontFamily:'FontThree'}} 
    title="Your Favorites" 
    data={data}
    email={email}
     />;
};
export default FavoritsView;
