import React from 'react'
import Background from '../../Background'
import Logo from '../../Logo'
import Header from '../../Header'
import ButtonItem from '../../Buttons/Buttons'
import { Image, StyleSheet ,View , Text} from 'react-native'

export default function StartScreen({ navigation }) {
  return (
<Background>
      <Logo />
      <Header></Header>
      <Text>
        
      </Text>

      <ButtonItem
       content='Login' 
       OnPress={() => navigation.navigate('LogIn')} />
      <ButtonItem
       content='Sign Up' 
       OnPress={() => navigation.navigate('SignUp')} />
       </Background>
  )
}
