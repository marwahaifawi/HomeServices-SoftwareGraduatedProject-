import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../core/theme';
import CardSquare from './CardSquare';
const {width} = Dimensions.get('window');

export default function SmallCards  ({item ,  OnPress , email}) {
    return (
      <>
      <View>
      <CardSquare
          email={email}
          iconname={item.iconname}
          OnPress={OnPress}
          FontFamily={{ fontFamily: 'FontThree' }}
          size={{ fontSize: 20 }}
          item={item}
          style={styles.container}
          styleImage={styles.stylesImage}
          imagename={item.image}
          price={String(item.price)+" "+"nis"}
          color="gray"
          loveicon="home-heart"
          plusicon="cart-plus"
          favorite={item.favorite}
          colorIcon={item.favorite ? "red" : "gray"} />
          </View>
          </>

       );
}
const styles = StyleSheet.create({
   container:{
      width: width /2.5,
      marginRight:5, 
      marginLeft:3, 
      paddingRight:8,
      paddingLeft:10,
      height:220,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,    
      elevation: 10,
        marginVertical: 10,
        justifyContent: 'center'
   },
   stylesImage:{
      height: 90,
      resizeMode:'contain',
      width: '90%',
      marginTop:8
   },
   ButtonContainer:{
      height:40,
      justifyContent:'center',
      marginLeft:15,
      borderRadius: 16,
      width:'78%',
      backgroundColor:theme.colors.secondary,
      marginTop:-30
   },
   addToCart:{
      alignSelf:'center',
      fontSize:18,
      fontFamily:'FontThree',
      color:theme.colors.surface
   },
   addToCartButton:{
      flexDirection:'row',
      justifyContent:'space-evenly'
   }
});