import React, {useEffect, useState, useContext} from 'react';
import {theme} from '../../core/theme';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity,
  StyleSheet
  } from 'react-native';
  import { Fontisto } from '@expo/vector-icons';

export function ProductDetails({navigation}) {

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.detaileCart}>
          <Image
          style={styles.image}
          source={require("../../assets/products/clean.png")}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>name</Text>
          <Text style={styles.price}>10 nis</Text>
          <Text style={styles.description}>descriptionjhsdkfharutgariugsaljfdblshdgvljkjdflksjaytjhgjhgiaegfadjf;af
          zdshfhz</Text>
          <View style={styles.ButtonContainer}>
             <TouchableOpacity>
            <View style={styles.addToCartButton}>
            <Fontisto name="shopping-basket-add" size={20} color={theme.colors.surface} />

                   <Text style={styles.addToCart}>
                      Add To Cart
                   </Text>
               </View>
     
             </TouchableOpacity>
          </View>
        </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
detaileCart:{
    backgroundColor:'white',
    height:'100%',
},
  image: {
    height: 400,
    width: '100%',
    resizeMode:'contain',
    alignSelf:'center',
  },
  infoContainer: {
    padding: 16,
    marginBottom:15
  },
  name: {
    fontSize: 22,
    fontFamily: 'FontThree',
    marginBottom: 10,

  },
  price: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily:'FontThree',
  },
  description: {
    fontSize: 16,
    color: '#787878',
  
  },
  ButtonContainer:{
    height:40,
    justifyContent:'center',
    borderRadius: 16,
    width:'92%',
    backgroundColor: theme.colors.secondary,
    marginTop: 50,
    alignSelf:'center'
 },
 addToCart:{
    alignSelf:'center',
    fontSize:18,
    fontFamily:'FontThree',
    color:theme.colors.surface,
    paddingLeft:10

 },
 addToCartButton:{
    flexDirection:'row',
    justifyContent:'center',
 }
});