import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import ServiceCards from './serviceCards';
import { theme } from '../../core/theme';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');
const VerticalCards = ({ item, OnPress }) => {
   return (
      <ServiceCards
         iconname={item.iconname}
         OnPress={OnPress}
         FontFamily={{ fontFamily: 'FontThree' }}
         size={{ fontSize: 16 }}
         item={item}
         style={styles.container}
         styleImage={styles.stylesImage}
         imagename={item.image}
      />
   );
}
const styles = StyleSheet.create({
   container: {
      width: width / 3.8,
      marginRight: 5,
      marginLeft: 5,
      marginBottom: 10,
      height: 150,
      paddingTop: 5,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5.00,
      elevation: 7,
      backgroundColor: theme.colors.surface
   },
   stylesImage: {
      height: 20,
      width: 50
   },
});
export default VerticalCards;
