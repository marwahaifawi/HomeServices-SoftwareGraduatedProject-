import React from "react";
import { View,StyleSheet,ScrollView } from "react-native";
import SmallCards from "../Cards/SmallCards";
import Title from '../Texts/Title';
import { useNavigation } from '@react-navigation/native';

export default function ProductsList({ title, data, fontFamily, email}) {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20, height: 40 }}>
        <Title fontFamily={fontFamily} size={30}>{title}</Title>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          {data.map(item =>
            <SmallCards
              email={email}
              OnPress={() => navigation.navigate('productDetails', item)}
              item={item}
              key={String(item.id)}
            />)}
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});