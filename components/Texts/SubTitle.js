import React from "react";
import { Text, View, StyleSheet } from "react-native";
const SubTitle = ({ children, numberOfLines = 2 , size , fontFamily}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.titleText , size , fontFamily]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    marginTop:10,
    fontFamily: 'FontTwo',
    color:'gray'
  },
});
export default SubTitle;
