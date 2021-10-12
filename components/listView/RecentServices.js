import React from "react";
import { View, Text } from "react-native";
import HorizantalList from "../lists/HorizantalList";
const RecentServices = ({ data }) => {
  return <HorizantalList title="Recent Services" data={data} />;
};

export default RecentServices;
