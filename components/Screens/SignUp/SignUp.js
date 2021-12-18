import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import Logo from "../Logo";
import TextInput from "../../Texts/TextInput";
import Background from '../Background';
import { theme } from "../../../core/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../context.js';
import { Foundation } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {signUp}= React.useContext(AuthContext);
  const [passwordconfirm, setconfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = React.useState({
    name: '',
    password: '',
    pass1: '',
    confirmpassword: '',
    isValidemail:true,
    secureTextEntry:true,
    secureTextEntry1:true,
    isValidPass:true,
    isValidUser:true,
    matching:true
  });

  //-----------------------------------------------------------------For email formate
  const validate = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(val) === false) {
      console.log("Email is Not Correct");
      setData({
        ...data,
        isValidemail: false,
      });
      
    } else {
    setData({
      ...data,
        isValidemail: true,
      });
      console.log("Email is Correct");
    }
  };
  //----------------------------------------------------------------------------------
  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({ 
        ...data,
        isValidUser: true 
      });
    } else {
      setData({ 
        ...data,
        isValidUser: false
       });
    }
  };
  //------------------------------------------------------------------------------
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        isValidPass: true,
      });
    } else {
     setData({
        ...data,
        isValidPass: false,
      });
    }
  };
  //--------------------------------------------------------
  const savepass1 = (val) => {
    setData({
      ...data,
      pass1: val });
  };
  //--------------------------------------------------
  const match = (val) => {
    if (passwordconfirm == data.pass1) { 
      setData({ 
      ...data,
      matching: true
     });}
   
    else
    {  
      setData({ 
      ...data,
      matching: false });
    } 
  
  };
//----------------------------------------------------------------------------------
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  //----------------------------------------------------------------------------------
  const updateSecureTextEntry1 = () => {
    setData({
      ...data,
      secureTextEntry1: !data.secureTextEntry1
    });
  }
//---------------------------------------------------------------------------
  const onSignUpPressed = () =>
   {
    fetch("http://192.168.1.109:1321/signup", {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
    },
      body: JSON.stringify({
        name: name,
        email:    email,
        password: password,

      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true)
        {
          setName(res.name);
          navigation.navigate("Profile",{ name:name ,  email:email ,});
          signUp(email,password ,name);
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
      <Background>
        <View style={styles.container}>
          <Logo />
          <View style={styles.textInput1}>
            <TextInput
              style={styles.textInput}
              label="name"
              returnKeyType="next"
              value={name}
              onChangeText={(text) => {setName(text) ,  handleValidUser(text)}}
              onEndEditing={(e) => handleValidUser(e.nativeEvent.text)  }
              placeholder="Name" />
               <MaterialIcons name="drive-file-rename-outline" size={24} color="gray" />
          </View>
          {data.isValidUser ? null : (
                    <Animated.View
                      animation="fadeInLeft"
                      duration={500}
                      style={{ paddingLeft: 30 }}
                    >
                      <Text style={styles.errorMsg}>
                        Username must be 4 or more characters long.
                      </Text>
                    </Animated.View>
                  )}

          <View style={styles.textInput1}>
            <TextInput
              style={styles.textInput}
              label="Email"
              returnKeyType="next"
              value={email}
              onChangeText={(text) => { setEmail( text), validate(text)  }}
              onEndEditing={(e) => validate(e.nativeEvent.text)}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Email Address" />
            <MaterialIcons name="email" size={24} color="gray" />
          </View>
          {data.isValidemail ? null : (
                    <Animated.View
                      animation="fadeInLeft"
                      duration={500}
                      style={{ paddingLeft: 30 }}
                    >
                      <Text style={styles.errorMsg}>Email is not correct</Text>
                    </Animated.View>
                  )}
      
          
          <View style={styles.textInput1}>
            <TextInput
              style={styles.textInput}
              label="Password"
              returnKeyType="done"
              value={password}
              onChangeText={(text) => { setPassword(text), handlePasswordChange(text)}}
              onEndEditing={(e) => savepass1(e.nativeEvent.text)}
              placeholder="Password"
              secureTextEntry={data.secureTextEntry1 ? true : false}
            />
            <TouchableOpacity
              onPress={updateSecureTextEntry1}
            >
              {data.secureTextEntry1 ?
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

          </View>
          {data.isValidPass ? null : (
                    <Animated.View
                      animation="fadeInLeft"
                      duration={500}
                      style={{ paddingLeft: 30 }}
                    >
                      <Text style={styles.errorMsg}>
                        Password must be 8 or more characters long.
                      </Text>
                    </Animated.View>
                  )}
          <View style={styles.textInput1}>
            <TextInput
              style={styles.textInput}
              label="ConfirmPassword"
              returnKeyType="done"
              value={passwordconfirm}
              onChangeText={(text) => { setconfirmPassword(text)}}
              placeholder="Confirm Password"
              onEndEditing={(e) => match(e.nativeEvent.text)}

              secureTextEntry={data.secureTextEntry ? true : false}
            />
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
          </View>
          {data.matching ? null:  (
                    <Animated.View
                      animation="fadeInLeft"
                      duration={500}
                      style={{ paddingLeft: 30 }}
                    >
                      <Text style={styles.errorMsg}>
                        Passwords are not match
                      </Text>
                    </Animated.View>
                  )}

          <View style={styles.button}>
            <TouchableOpacity onPress={() => onSignUpPressed()} >
              <Text style={{ color: theme.colors.surface, fontSize: 20, fontWeight: 'bold', fontFamily: 'FontTwo' }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text style={{ fontSize: 15, color: theme.colors.primary, fontFamily: 'FontThree' }}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View></View>
      </Background>
    </>


  );
}

const styles = StyleSheet.create({

  container: {
    alignItems:'center', 
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor:'white',
    borderRadius:20,
    width:"90%",
    height:"97%",
    alignSelf:'center',
    opacity:0.9,
    marginTop:40
  },
  textInput:{
    fontSize: 17, 
    fontFamily:'FontTwo', 
    width:'80%',
    height:'100%'
  },
  textInput1:{
    height: 50,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 30,
   alignItems: 'center',
    flexDirection:'row',    
    borderRadius:10, 
borderBottomWidth:1,
    borderBottomColor:theme.colors.primary,
    margin:10
  },
  button: {
    backgroundColor: theme.colors.primary,
    fontFamily: 'FontThree',
    fontSize: 20,
    width: 100,
    borderRadius: 50,
    marginTop: 10,
    width: 100,
    height: 50,
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
    fontSize: 18
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
});
/*<View style={styles.textInput1}>
            <TextInput
              style={styles.textInput}
              label="Phone"
              returnKeyType="next"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Phone Number" />
         <Foundation name="telephone" size={24} color="gray" />
          </View>*/