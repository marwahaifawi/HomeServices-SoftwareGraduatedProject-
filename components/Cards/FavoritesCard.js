import React from 'react'
import { View } from 'react-native';
import MiniCard from './miniCard';
const FavoritesCard = ({ item, OnPress, email }) => {
  return (
    <>
      <View style={{ margin: 10 }}>
        <MiniCard
          OnPress={OnPress}
          FontFamily={{ fontFamily: 'FontThree' }}
          item={item}
          email={email}
        />
      </View>
    </>
  );
}
export default FavoritesCard;
