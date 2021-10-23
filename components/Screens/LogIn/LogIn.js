import React, { useState } from 'react';
import { TouchableOpacity, View,Text , TextInput, Button  } from 'react-native';
import Styles from './LogInStyles.js';
import Logo from '../Logo';
import { theme } from '../../../core/theme.js';
import ButtonItem from '../../Buttons/Buttons';
import Title from '../../Texts/Title.js';
import BackButton from '../../Buttons/BackButton.js';
import { emailValidator } from '../../../helpers/emailValidator';
import { passwordValidator } from '../../../helpers/passwordValidator';
export default function LogIn({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.navigate('UserHomePage')
  }

  return (

    <>
    <View style={{ padding: 20,}}><BackButton goBack={() => navigation.navigate('HomePage')} /></View>
    
    
    <View style={Styles.container}>
      <Logo />
      <Title color={{ color: theme.colors.primary }} size={{ fontSize: 20 }} fontFamily={{ fontFamily: 'FontThree' }}>Login</Title>
      <TextInput
        style={Styles.textInput}
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Email" />
      <TextInput
        style={Styles.textInput}
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        placeholder="Password"
        secureTextEntry />
      <View style={Styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={Styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.button}>
        <Button
          onPress={onLoginPressed}
          title={'Login'}
          color={theme.colors.surface} /></View>
      <View style={Styles.row}>
        <Text style={{ color: theme.colors.primary, fontFamily: 'FontThree' }}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={Styles.link}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View></>
   
  )
}
