import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import Logo from "../Logo";
import TextInput from "../../Texts/TextInput";
import { theme } from "../../../core/theme";
import BackButton from '../../Buttons/BackButton';
import Title from "../../Texts/Title";

export default function SignUp({ navigation }) {
  const [userName, setName] = useState({ value:""});
  const [emailAdd, setEmail] = useState({ value: ""});
  const [passwordFirst, setPassword] = useState({ value: ""});
  const onSignUpPressed = () => {
        fetch("http://192.168.1.104:1321/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
         body: JSON.stringify({ 
            emailAdd: emailAdd,
            passwordFirst: passwordFirst,
            userName: userName,

          }),
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.success === true) {
              navigation.reset({
                //Using reset avoid you to go back to login Screen
                index: 0,
                routes: [
                  {
                    name: "HomePage",
                    params: {
                      name: userName,
                    },
                  },
                ],
              });
            }
            else {
              alert(res.message);
              console.log(res);
              console.log("err")
            }
          })
          .done();
      };
    return (
      <>
        <View style={styles.container}>

        <Logo />
        <Title color={{ color: theme.colors.primary }} size={{ fontSize: 20 }} fontFamily={{ fontFamily: 'FontThree' }}>Create New Account</Title>
        <TextInput
          style={styles.textInput}
          label="Name"
          returnKeyType="next"
          value={userName.value}
          onChangeText={(text) => setName({ value: text})}
          placeholder="Name" />
        <TextInput
          style={styles.textInput}
          label="Email"
          returnKeyType="next"
          value={emailAdd.value}
          onChangeText={(text) => setEmail({ value: text})}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email Address" />
        <TextInput
          style={styles.textInput}
          label="Password"
          returnKeyType="done"
          value={passwordFirst.value}
          onChangeText={(text) => setPassword({ value: text})}
          placeholder="Password"
          secureTextEntry={true}
           />
        <View style={styles.button}>           
            <TouchableOpacity onPress={onSignUpPressed} >
          <Text style={{color: theme.colors.surface, fontSize:20 , fontWeight: 'bold' , fontFamily:'FontTwo' }}>
            Sign Up
          </Text>
        </TouchableOpacity>
            </View>

        <View style={styles.row}>
          <Text style={{ fontSize:15, color: theme.colors.primary, fontFamily: 'FontThree' }}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View></View></>


    );
  }

  const styles = StyleSheet.create({

    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50,

    },
    textInput: {
      height: 50,
      width: '100%',
      paddingLeft: 10,
      fontSize: 17,
      fontFamily: 'FontTwo',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: theme.colors.primary

    },
    button: {
      backgroundColor:theme.colors.primary,
      fontFamily:'FontThree', 
      fontSize:20,
      width:100,
      borderRadius:50, 
      marginTop:10,
     width:100,
     height:40,
     justifyContent: 'center',
     alignItems: 'center'

    },
    row: {
      flexDirection: 'row',
      marginTop: 20
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary,
      fontFamily: 'FontTwo',
      fontSize:17
    },
  });
