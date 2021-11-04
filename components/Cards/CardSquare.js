import React, { Component ,useState } from "react";
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback ,TouchableOpacity} from "react-native";
import Title from "../Texts/Title";
import SubTitle from "../Texts/SubTitle";
import { theme } from "../../core/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const CardSquare = ({loveicon ,colorIcon, color, style, styleImage, item, desc, size, FontFamily , OnPress , iconname , imagename , price}) => {
  const { name } = item;
  const Name = iconname;
  const Icon = loveicon;
  const [state, setState] = useState(item.favorite);

  return (
    <TouchableWithoutFeedback onPress={OnPress} >
      <Animatable.View animation="pulse" iterationCount={100} direction="alternate" style={[styles.container, style]}> 
        <Image  style={[styles.HeadImage, styleImage]} source={imagename} />
        <MaterialIcons  name={Name} size={38} color={theme.colors.secondary} />
        <View style={styles.contentContainer}>
          <Title  fontFamily={FontFamily} size={size}>{name}</Title>
          <SubTitle>{desc}</SubTitle>
          <View style={{flexDirection:'row', justifyContent:'space-between', paddingRight:2,}}>   
          <Text style={[styles.text,color={color}]}>{price}</Text>
          <TouchableOpacity onPress={() => setState(!state)}> 
            <MaterialCommunityIcons name={Icon} size={26} color={colorIcon} />
          </TouchableOpacity>
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
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ffff",
    marginTop: 10

  },
  text:{
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily:'FontThree'
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
