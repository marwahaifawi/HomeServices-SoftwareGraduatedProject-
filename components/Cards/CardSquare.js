import React, { Component } from "react";
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Title from "../Texts/Title";
import SubTitle from "../Texts/SubTitle";
import { theme } from "../../core/theme";
import { MaterialIcons } from '@expo/vector-icons';

const CardSquare = ({ style, styleImage, item, desc, size, FontFamily , OnPress , name , imagename}) => {
  const { servicename } = item;
  const Name = name;
  return (
    <TouchableWithoutFeedback onPress={OnPress} >
      <View style={[styles.container, style]}> 
        <Image style={[styles.HeadImage, styleImage]} source={imagename} />
        <MaterialIcons name={Name} size={38} color={theme.colors.secondary} />
        <View style={styles.contentContainer}>
          <Title fontFamily={FontFamily} size={size}>{servicename}</Title>
          <SubTitle>{desc}</SubTitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ffff",
    marginTop: 10

  },
  HeadImage: {
    width: "100%",
    height: 150
  },
  contentContainer: {
    padding: 5
  }
})

export default CardSquare;
