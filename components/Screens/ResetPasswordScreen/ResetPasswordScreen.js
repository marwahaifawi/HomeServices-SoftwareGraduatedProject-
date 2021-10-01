import React, { useState } from 'react'
import Background from '../../Background'
import BackButton from '../../BackButton'
import Logo from '../../Logo'
import Header from '../../Header'
import TextInput from '../../TextInput'
import ButtonItem from '../../Buttons/Buttons'
import { emailValidator } from '../../../helpers/emailValidator'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LogIn')
  }

  return (
    <Background>
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Enter Your Email Address"
        description="You will receive email with password reset link."
      />
      <ButtonItem
       content='Send' 
       OnPress={sendResetPasswordEmail} />
    </Background>
  )
}
