import React from 'react'
import { View, Text , Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../core/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import CardSquare from './CardSquare';
import * as Animatable from 'react-native-animatable';

const {width} = Dimensions.get('window');

const SmallCards = ({item ,  OnPress}) => {

    return (
      <>
      <View>
      <CardSquare
          iconname={item.iconname}
          OnPress={OnPress}
          FontFamily={{ fontFamily: 'FontTwo' }}
          size={{ fontSize: 15 }}
          item={item}
          style={styles.container}
          styleImage={styles.stylesImage}
          imagename={item.image}
          price={'$' + String(item.price)}
          color="gray"
          loveicon="home-heart"
          favorite={item.favorite}
          colorIcon={item.favorite ? "red" : "gray"} />
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
          </>

       );
}
const styles = StyleSheet.create({
   container:{
      width: width /2.4,
      marginRight:15, 
      height:200,
      backgroundColor: 'white',
      borderRadius: 16,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowColor: 'black',
      shadowOffset: {
        height: 0,
        width: 0    },
        elevation: 1,
        marginVertical: 10,
   },
   stylesImage:{
      height: 80,
      resizeMode:'contain',
      borderTopLeftRadius: 16,
      marginTop:15, 
      borderTopRightRadius: 16,
      width: '100%',
   },
   ButtonContainer:{
      height:40,
      justifyContent:'center',
      borderRadius: 16,
      width:'92%',
      backgroundColor:theme.colors.secondary
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
export default SmallCards;
