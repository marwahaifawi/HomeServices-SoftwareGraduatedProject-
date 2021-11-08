import React from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function Logo() {
  return <Animatable.Image animation='rubberBand' source={require('../../assets/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    marginBottom: 8,
    alignSelf:'center'
  },
})
