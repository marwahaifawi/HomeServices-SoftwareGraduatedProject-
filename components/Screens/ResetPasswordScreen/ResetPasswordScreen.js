import React, { useState } from 'react';
import Background from '../Background';
import Logo from '../Logo';
import {theme} from '../../../core/theme';
import Header from '../../Texts/Header';
import { emailValidator } from '../../../helpers/emailValidator';
import { TouchableOpacity, View,Text , TextInput , StyleSheet} from 'react-native';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
return
  }

  return (
    <Background>
      <View style={Styles.container}> 
       <Logo />
      <Header>Restore Your Password</Header>
      <View   style={Styles.textInput1}> 
      <TextInput
           style={Styles.textInput}
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Enter Your Email Address"
        description="You will receive email with password reset link."
      />
      </View>
        <View styles={Styles.container}>
      <TouchableOpacity
        style={Styles.buttonStyled}
        OnPress={sendResetPasswordEmail()} 
      >
        <Text style={Styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
     </View>
     
    </Background>
  )
}
const Styles = StyleSheet.create({
  container: {
    alignItems:'center', 
    paddingLeft: 40,
    paddingRight: 40,

    backgroundColor:'white',
    borderRadius:20,
    width:"90%",
    height:"82%",
    alignSelf:'center',
    opacity:0.9,
    marginTop:110
  },
  buttonStyled: {
    backgroundColor:theme.colors.primary,
    fontFamily:'FontThree', 
    fontSize:20,
    width:100,
    borderRadius:20, 
    marginTop:10,
   width:100,
   height:50,
   justifyContent: 'center',
   alignItems: 'center'
  },
  buttonText: {
    color: theme.colors.surface,
     fontSize:20 ,
      fontWeight: 'bold' , 
      fontFamily:'FontTwo'
  },
  textInput1:{
    height: 50,
    width: '100%',
    padding: 10,
    flexDirection:'row',
    justifyContent: 'space-between',
    borderRadius:10, 
    borderBottomWidth:1, 
    borderColor:theme.colors.primary,
    margin:10

  },
  textInput:{
    fontSize: 17, 
    fontFamily:'FontTwo', 
    width:'90%'

  },
  
});

  