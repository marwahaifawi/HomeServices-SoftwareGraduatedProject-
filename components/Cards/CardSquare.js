import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../Texts.js/Title";
import SubTitle from "../Texts.js/SubTitle";
const CardSquare = ({style , styleImage , item , desc}) =>{
    const{servicename} = item;
    return (
      <View style={[styles.container,style]}>
        <Image style={[styles.HeadImage , styleImage]} source={require("../../assets/headImage.png")} />
        <View style={styles.contentContainer}>
          <Title size={{fontSize:18}}>{servicename}</Title>
          <SubTitle>{desc}</SubTitle>
        </View>
      </View>
    )
}
const styles= StyleSheet.create({
    container:{
        width:"100%",
        height:240,
        borderRadius:8,
        overflow: "hidden", 
        backgroundColor: "#ffff",
        marginTop:10

    },
    HeadImage:{
        width:"100%", 
        height:150
    },
    contentContainer:{
        padding:5
    }
})

export default CardSquare;
