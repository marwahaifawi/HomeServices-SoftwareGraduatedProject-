import React from 'react'
import { View, Text , Dimensions, StyleSheet } from 'react-native';
import CardSquare from './CardSquare';
const {width} = Dimensions.get('window');
const SmallCards = ({item}) => {

    return (
     
              <CardSquare item= {item} style={ styles.container} styleImage={styles.stylesImage}/>


 

       );
}
const styles = StyleSheet.create({
   container:{
      width: width / 3 , 
      marginRight:15, 
      height:100
   },
   stylesImage:{
      height:50
   },
});
export default SmallCards;
