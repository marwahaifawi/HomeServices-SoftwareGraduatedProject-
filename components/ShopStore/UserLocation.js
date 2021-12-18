import React, { useState, useEffect } from 'react';
import * as Location from "expo-location";
import {
  Text,View
} from "react-native";
export default function UserLocation({ route }) {
  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);
  
  // create the handler method
  
  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
  
    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  
    let { coords } = await Location.getCurrentPositionAsync();
  
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
  
      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        setDisplayCurrentAddress(address);
        console.log(address);
      }
    }
  };
}