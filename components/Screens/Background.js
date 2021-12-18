import React from 'react';
import { ImageBackground, StyleSheet, KeyboardAvoidingView , ScrollView} from 'react-native';

export default function Background({ children}) {
  return (
    <ImageBackground style={styles.background} source={require('../../assets/background.png')}> 
            <ScrollView showsVerticalScrollIndicator={false}>

      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
           </ScrollView>
    </ImageBackground>


  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode:'cover'

  },
  container: {
justifyContent:'center',
alignContent:'center',
  },
})
