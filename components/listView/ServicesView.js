import React from "react";
import VerticalList from "../lists/VerticalList";
import * as Animatable from 'react-native-animatable';

const ServicesView = ({ data , OnPress , email}) => {
    return <VerticalList 
    OnPress={OnPress}  
    fontFamily={{fontFamily:'FontThree'}} 
    title="Our Services" 
    email={email}
    data={data} />;
};

export default ServicesView;
