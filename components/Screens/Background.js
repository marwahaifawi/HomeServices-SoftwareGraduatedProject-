import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../../core/theme'

export default function Background({ children}) {
  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    height:'100%'

  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',

    height:'100%'
  },
})
