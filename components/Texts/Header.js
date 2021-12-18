import React from 'react'
import { StyleSheet, Text  } from 'react-native'
import { theme } from '../../core/theme'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: theme.colors.primary,
    fontFamily:'FontThree',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
