import React, { Component, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Dimensions , Linking } from "react-native";
import Title from "../Texts/Title";
const { width } = Dimensions.get('window');
import { theme } from "../../core/theme";
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';

const MediumCards = ({ city, item, desc, size, FontFamily, OnPress, imagename , phone , email}) => {
  const [rating,setRating] = useState();
  const ratingCompleted=(rating) =>{
    return console.log("Rating is: " + rating)
   }
  return (
    <TouchableWithoutFeedback onPress={OnPress} >
      <Animatable.View animation="pulse" iterationCount={2} direction="alternate" style={styles.container}>
        <View style={{ flexDirection: 'row'}}>
        <Image style={styles.HeadImage} source={imagename} />
        <View style={styles.info}>
          <Title fontFamily={FontFamily} size={size}>{item.Name}</Title>
          <Text style={styles.text}>{desc}</Text>
          <Text style={styles.text}>{city}</Text>
        </View>
        <View>
          <TouchableOpacity style={{marginTop:5}} onPress={()=>{
            Linking.openURL('mailto:'+item.Email)
          }}>          
            <MaterialCommunityIcons name="email-send-outline" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:13}} onPress={()=>{
            Linking.openURL('tel:'+item.phoneNumber)
          }}>          
            <Feather name="phone-outgoing" size={23} color={theme.colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:13}}>          
          <Ionicons name="chatbubble-outline" size={24} color={theme.colors.secondary} />
          </TouchableOpacity>
        </View>
        </View>
        <AirbnbRating
                count={5}
                defaultRating={item.Rate}
                isDisabled={true}
                size={15}
                showRating={false}/>
      </Animatable.View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    height: 160,
    borderRadius: 10,
    backgroundColor: "#ffff",
    marginTop: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
       width: 0,
       height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,    
    elevation: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: 'FontThree',
    marginTop: 10,
    color: 'gray'
  },
  HeadImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 20,
    borderColor: "gray",
    borderWidth: 1
  },
  info: {
    marginRight: 5,
    width: 150
  }
})

export default MediumCards;
