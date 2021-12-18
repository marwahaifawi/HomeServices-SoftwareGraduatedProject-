import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import VerticalCards from "../Cards/VerticalCards";
import Title from '../Texts/Title';
import * as Animatable from 'react-native-animatable';

const HorizantalList = ({ title, data , fontFamily }) => {
  return (
    <>
      <Title  fontFamily={fontFamily} size={20}>{title}</Title>
      <FlatList
      showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => String(item.id)}
        horizontal 
        renderItem={({ item }) => <VerticalCards item={item} />}
      />
    </>
  );
};
const style = StyleSheet.create({


});

export default HorizantalList;
