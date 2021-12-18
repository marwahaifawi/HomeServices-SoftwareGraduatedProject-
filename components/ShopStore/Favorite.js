import React, { useEffect, useState, useContext } from 'react';
import FavoritsView from '../listView/FavoritsView';
import { View, Text,Image } from 'react-native';
import { theme } from '../../core/theme';

export default function Favorite({ route }) {
  const email = route.params;
  const [Favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    fetch("http://192.168.1.109:1321/Fav?email=" + email)
      .then((response) => response.json())
      .then((responsejson) => {
        setFavorites(responsejson);
        fetchData();
        console.log(responsejson);
      }).catch((error) => {
        console.log(error);
      })
  }
if (Favorites.length == 0) {
    return (
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <Image style={{ alignSelf: 'center', marginTop: 100, width: 300, height: 300 }} source={require('../../assets/emptyFav.png')} />
        <Text style={{ alignSelf: 'center', marginTop: 50, fontSize: 25, fontFamily: 'FontTwo', color: theme.colors.primary }}>
          Your Favorite List is empty !
        </Text>
      </View>
    )
  }
  else {
    return (
      <View>
        <FavoritsView data={Favorites} email={email} />
      </View>
    )
  }
}