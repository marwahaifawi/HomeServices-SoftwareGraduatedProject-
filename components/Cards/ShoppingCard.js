import React from 'react'
import { View } from 'react-native';
import MiniShopCard from './miniShopCard';
const ShoppingCard = ({ item, OnPress, email , total}) => {
  return (
    <>
      <View style={{ margin: 10 }}>
        <MiniShopCard
          OnPress={OnPress}
          FontFamily={{ fontFamily:'FontThree'}}
          item={item}
          email={email}
          total={total}
        />
      </View>
    </>
  );
}
export default ShoppingCard;
