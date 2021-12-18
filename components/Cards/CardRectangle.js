import React from 'react'
import {View} from 'react-native';
import MediumCards from './MediumCards';
const CardRectangle = ({item , OnPress}) => {
    return (
      <>
      <View>
      <MediumCards
          OnPress={OnPress}
          FontFamily={{ fontFamily: 'FontThree' }}
          size={{ fontSize: 20}}
          item={item}
          desc={item.servicesoffered}
          city={item.City}
          phone={item.phoneNumber}
          email={item.Email}
          />
          </View>
          </>
       );
}
export default CardRectangle;
