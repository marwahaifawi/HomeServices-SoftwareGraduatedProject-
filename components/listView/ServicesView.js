import React from "react";
import HorizantalList from "../lists/HorizantalList";
import VerticalList from "../lists/VerticalList";
import VerticalCards from "../Cards/VerticalCards";
const ServicesView = ({ data , OnPress}) => {
    return <VerticalList OnPress={OnPress}  fontFamily={{fontFamily:'FontThree'}} title="All Services" data={data} />;
};

export default ServicesView;
