import React, { useEffect, useState } from 'react';
import CartsView from '../listView/CartsView';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { theme } from '../../core/theme';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
export default function Cart({ route }) {
  const email = route.params;
  const navigation = useNavigation();
  const [Shoppinglist, setShoppinglist] = useState([]);
  let total = 0;
  Shoppinglist.forEach((item) => {
    total += item.price;
  }
  )
  const fetchData = () => {
    fetch("http://192.168.1.109:1321/shoppinglistScreen?email=" + email)
      .then((response) => response.json())
      .then((responsejson) => {
        setShoppinglist(responsejson);
      }).catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    fetchData();
  }, [])
  if (Shoppinglist.length == 0) {
    return (
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <Image style={{ alignSelf: 'center', marginTop: 100, width: 300, height: 300 }} source={require('../../assets/emptyCart.png')} />
        <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 25, fontFamily: 'FontTwo', color: theme.colors.primary }}>
          Your Shopping List is empty !
        </Text>
      </View>
    )
  }
  else {
    return (
      <>
        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
          <Image style={{ alignSelf: 'center', marginTop: 10, width: 50, height: 50 }} source={require('../../assets/justlogo.png')} />
          <Text style={{
            width: '50%',
            marginTop: 30,
            flexDirection: 'row',
            alignSelf: 'center',
            fontSize: 20,
            fontFamily: 'FontThree',
            color: theme.colors.primary
          }}>HOME SERVICES
          </Text>
        </View>
        <CartsView data={Shoppinglist} email={email} />
        <View style={{ backgroundColor: 'white', padding: 10, flexDirection: 'row' , borderTopWidth:1 , borderTopColor:'gray' }}>
          <Text style={{ fontSize: 20, color: 'gray', fontFamily: 'FontThree' }}>
            Total
          </Text>
          <Text style={{ fontSize: 25, color: theme.colors.primary, fontFamily: 'FontTwo', marginLeft: 200 }}>
            {total}
          </Text>
          <Text style={{ fontSize: 25, color: theme.colors.primary, fontFamily: 'FontTwo' }}>
              nis
          </Text>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' , height:50 , backgroundColor: theme.colors.primary, alignItems: 'center'}} onPress={() => navigation.navigate('ConfirmOrder',Shoppinglist)} >
          <Text style={{ paddingRight: 15, color:'white', fontSize: 20, fontWeight: 'bold', fontFamily: 'FontThree' }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </>
    )
  }
}