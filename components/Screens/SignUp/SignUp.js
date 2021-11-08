import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import Logo from "../Logo";
import TextInput from "../../Texts/TextInput";
import { theme } from "../../../core/theme";
import Title from "../../Texts/Title";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export default function SignUp({ navigation }) {
  const [userName, setName] = useState({ value:""});
  const [emailAdd, setEmail] = useState({ value: ""});
  const [passwordFirst, setPassword] = useState({ value: ""});
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
});

const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false
        });
    }
}

const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val
    });
}

const handleConfirmPasswordChange = (val) => {
    setData({
        ...data,
        confirm_password: val
    });
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
}
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
                navigation.navigate({
                      name: "Profile",
                      params: 
                      {
                        name:  res.name,
                        email: res.email
                      },
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
        <View style={styles.textInputBorder}> 
        <MaterialIcons name="drive-file-rename-outline" size={24} color="gray" />
        <TextInput
          style={styles.textInput}
          label="Name"
          returnKeyType="next"
          value={userName.value}
          onChangeText={(text) => setName({ value: text})}
          placeholder="Name" />
          </View>
          <View style={styles.textInputBorder}> 
          <MaterialIcons name="email" size={24} color="gray" />
        <TextInput
          style={styles.textInput}
          label="Email"
          returnKeyType="next"
          value={emailAdd.value}
          onChangeText={(text) =>{ setEmail({ value: text}), textInputChange(text) }}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email Address" />
         
          
          </View>
         <View    style={styles.textInputBorder}>
         <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
           <TextInput
          style={styles.textInput}
          label="Password"
          returnKeyType="done"
          value={passwordFirst.value}
          onChangeText={(text) => {setPassword({ value: text}) , handlePasswordChange(text)}}
          placeholder="Password"
          secureTextEntry={data.secureTextEntry ? true : false}
           />
           </View>
        
        <View style={styles.button}>           
            <TouchableOpacity onPress={()=>onSignUpPressed()} >
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
      backgroundColor:'white'

    },
    textInput: {
      width: '100%',
      fontSize: 17,
      fontFamily: 'FontTwo',
      paddingLeft:10, 

    },
    textInputBorder: {
      height: 50,
      width: '100%',
      flexDirection:'row',
      paddingLeft: 10,
      alignItems:'center',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      margin:10

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
      fontSize:18
    },
  });
