import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SmallCards from "../Cards/SmallCards";
import Title from "../Texts.js/Title";
const HorizantalList = ({ title, data }) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        horizontal 
        showsHorizontalScrollIndicator="false"
        renderItem={({ item }) => <SmallCards item={item} />}
      />
    </>
  );
};
const style = StyleSheet.create({});

export default HorizantalList;
