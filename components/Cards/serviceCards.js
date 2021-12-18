import React, { Component ,useState } from "react";
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback ,TouchableOpacity} from "react-native";
import Title from "../Texts/Title";
import { theme } from "../../core/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function ServiceCards({loveicon ,colorIcon, color, style, styleImage, item, desc, size, FontFamily , OnPress , iconname , imagename , price}) {
  const { name } = item;
  const Name = iconname;
  const Icon = loveicon;
  const [state, setState] = useState(item.favorite);
  return (
    <TouchableWithoutFeedback onPress={OnPress} >
      <Animatable.View animation="pulse" iterationCount={2} direction="alternate" style={[styles.container, style]}> 
      <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={() => setState(!state)}> 
            <MaterialCommunityIcons name={Icon} size={30} color={colorIcon} />
      </TouchableOpacity>
        <Image  style={[styles.HeadImage, styleImage]} source={{uri:item.image}} />
        <MaterialIcons  name={Name} size={38} color={theme.colors.secondary} />
        <View style={styles.contentContainer}>
          <Title  fontFamily={FontFamily} size={size}>{name}</Title>
          <View style={{flexDirection:'row', justifyContent:'space-between', paddingRight:2,}}>   
          </View>
        </View>
      </Animatable.View>
    </TouchableWithoutFeedback>
  )
  
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 240,
    borderRadius: 5,
    backgroundColor: "#ffff",
    marginTop: 10
  },
  text:{
    fontSize: 18,
    alignSelf:'center',
    fontFamily:'FontThree'
  },
  HeadImage: {
    width: "100%",
    height: 150
  },
  contentContainer: {
    padding: 5,
  }
})