import React from "react";
import { Text, View, StyleSheet } from "react-native";
const SubTitle = ({ children, numberOfLines = 2 , size}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.titleText , size]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    marginTop:10
  },
});
export default SubTitle;
