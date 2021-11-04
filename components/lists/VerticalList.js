import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import VerticalCards from "../Cards/VerticalCards";
import Title from '../Texts/Title';
import * as Animatable from 'react-native-animatable';

const VerticalList = ({ title, data , fontFamily , OnPress }) => {
  return (
    <>
      <Title  fontFamily={fontFamily} size={20}>{title}</Title>
      <View style={style.container}>
         {data.map(item =>
          <VerticalCards 
          OnPress={OnPress} 
          item={item} 
          key={String(item.id)}
          /> )}        
         </View>
    </>
    
  );

};

const style = StyleSheet.create({
 container:{
   flexDirection:'row',
   flexWrap:'wrap',
   justifyContent:'space-between'
 }
});

export default VerticalList;
