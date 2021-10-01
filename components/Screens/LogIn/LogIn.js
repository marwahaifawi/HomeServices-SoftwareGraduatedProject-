import React, { useState } from 'react';
import { TouchableOpacity, View,Text  } from 'react-native';
import Styles from './LogInStyles.js';
import Background from '../../Background';
import Logo from '../../Logo';
import Header from '../../Header';
import ButtonItem from '../../Buttons/Buttons';
import TextInput from '../../TextInput';
import BackButton from '../../BackButton';
import { emailValidator } from '../../../helpers/emailValidator';
import { passwordValidator } from '../../../helpers/passwordValidator';
import {theme} from '../../../core/theme'
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
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainPage' }],
    })
  }

  return (
    <Background>
      <Logo />
      <Header>Login</Header>
      <TextInput
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
        placeholder="Email"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        placeholder="Password"
        secureTextEntry
      />
      <View style={Styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={Styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <ButtonItem
       content='Login' 
       OnPress={onLoginPressed} />
      <View style={Styles.row}>
        <Text style={Styles.texts}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={Styles.link}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}
