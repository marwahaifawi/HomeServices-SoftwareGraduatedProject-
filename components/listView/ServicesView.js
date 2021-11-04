import React from "react";
import VerticalList from "../lists/VerticalList";
import * as Animatable from 'react-native-animatable';

const ServicesView = ({ data , OnPress}) => {
    return <VerticalList 
    OnPress={OnPress}  
    fontFamily={{fontFamily:'FontThree'}} 
    title="All Services" 
    data={data} />;
};

export default ServicesView;
