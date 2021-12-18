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
  import { FontAwesome } from '@expo/vector-icons';
  import { AntDesign } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';

export default function ProductDetails({route}) {
  const product=route.params;
  const navigation = useNavigation();
  console.log(product);

  return (

    <>
        <View style={styles.detaileCart}>
        <View style={{flexDirection: 'row' ,  backgroundColor:'white'}}>
        <TouchableOpacity OnPress={()=>navigation.navigate('ShopStore')} >

      <AntDesign  name="left" size={24} color="black"  style={{marginTop:30 , marginRight:50, marginLeft:10}}/>
      </TouchableOpacity>

      <Image  style={{  alignSelf: 'center', marginTop: 10,width:50 , height:50}} source={require('../../assets/justlogo.png')} />
        <Text style={{ 
        width: '50%',
        marginTop: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize:20, 
        fontFamily:'FontThree',
        color:theme.colors.primary
        }}>HOME SERVICES</Text> 
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Image
          style={styles.image}
          source={{uri:product.image}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <View style={{backgroundColor:theme.colors.secondary ,height:30, width:90 , justifyContent:'center' , borderTopRightRadius:10 }}>
          <Text style={styles.price}>{product.price} nis</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <View style={styles.ButtonContainer}>
             <TouchableOpacity onPress={() => navigation.navigate('Cart' , product)} >
            <View style={styles.addToCartButton}>
        <FontAwesome name="shopping-cart" size={25} color= 'white' />
                   <Text style={styles.addToCart}>
                      Add To Cart
                   </Text>
               </View>
             </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
        </View>  

      </>
  );
}
const styles = StyleSheet.create({
detaileCart:{
    backgroundColor:'white',
    height:'100%',
},
  image: {
    height: 350,
    width: '80%',
    resizeMode:'contain',
    alignSelf:'center',
    padding: 16,
  },
  infoContainer: {
    borderTopRightRadius:10,
    borderTopLeftRadius: 10,
    borderTopWidth:1,
    paddingBottom:10,
    width:'95%',
    alignSelf:'center',
    borderColor: '#787877',
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,    
    elevation: 10,
  },
  name: {
    fontSize: 25,
    fontFamily: 'FontThree',
    marginBottom: 10,
    color:'#787878',
    padding: 16,
  },
  price: {
    fontSize: 18,
    fontFamily:'FontThree',
    color:'white',
    alignSelf:'center'
  },
  description: {
    fontSize: 16,
    padding: 16,
    color: '#787878',
  
  },
  ButtonContainer:{
    height:40,
    justifyContent:'center',
    borderRadius: 16,
    width:'92%',
    backgroundColor: theme.colors.primary,
    marginTop: 20,
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