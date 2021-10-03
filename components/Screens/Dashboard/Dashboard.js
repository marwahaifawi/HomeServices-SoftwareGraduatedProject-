import React from 'react'
import Background from '../../Background'
import Logo from '../../Logo'
import Header from '../../Header'
import Paragraph from '../../Paragraph'
import ButtonItem from '../../Buttons/Buttons'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <ButtonItem
       content='Logout' 
       OnPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })} />
    </Background>
  )
}
