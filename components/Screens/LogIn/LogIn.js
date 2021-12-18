import React, { useState , useEffect } from 'react';
import { TouchableOpacity, View,Text , TextInput} from 'react-native';
import Styles from './LogInStyles.js';
import Logo from '../Logo';
import { theme } from '../../../core/theme.js';
import Background from '../Background';
import { AuthContext } from '../../context.js';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
export default function LogIn() {
  const navigation = useNavigation();
  const {signIn}= React.useContext(AuthContext);

  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirmpassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
});
  const [email, setEmail]       = useState("");
  const [name,setName]          = useState("");
  const [password, setPassword] = useState("");
  const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val
    });
}
const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}
  const onLoginPressed = () => {
    fetch("http://192.168.1.109:1321/login", {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
    },
     body: JSON.stringify({ 
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          setName(res.name);
         navigation.navigate("Profile",{ email:res.email , name:res.name});
          signIn(email,password , res.name);
        }
        else {
          alert(res.message);
          console.log(res);
          console.log("err")
        }       
         console.log(res.name);

      })
      .done();
  };
  return (
    <>
       <Background>
       <View style={Styles.container}>
      <Logo />
      <View  style={Styles.textInput1}>
        <TextInput
      style={Styles.textInput}
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Email" 
    
        />
                  <MaterialIcons name="email" size={24} color="gray" />

        </View>
      <View   style={Styles.textInput1}> 
        <TextInput
        style={Styles.textInput}
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(text) => {setPassword(text) , handlePasswordChange(text)}}
        placeholder="Password"
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
     
      <View style={Styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={Styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.button}>
        
        <TouchableOpacity onPress={()=>onLoginPressed()} >
          <Text style={{color: theme.colors.surface, fontSize:20 , fontWeight: 'bold' , fontFamily:'FontTwo' }}>
            Login
          </Text>
        </TouchableOpacity>
          
          </View>
      <View style={Styles.row}>
        <Text style={{ color: theme.colors.primary, fontFamily: 'FontThree', fontSize:13 }}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={Styles.link}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
       </Background>
    </>
   
  )
}
