import React, { useState , useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import AsyncStorage from 'react-native';
import { TouchableOpacity, View,Text  } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
//import {AuthContext} from '../../components/context';
export const AuthContext = React.createContext();

export default function UserProfile({ navigation, props }) {
  
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 
  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
      //const userToken = String(foundUser[0].userToken);
      //const userName = foundUser[0].username;
    }
     /* try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    SignOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    SignUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },*/
  }), []);
  
useEffect(() => {
    setTimeout(async() => {
      setIsLoading(false);
      }, 1000);
  }, []);
 if(isLoading){
  return (
 <View>
     <ActivityIndicator size='large'/>
 </View>
  );
}
 
  return (
<AuthContext.Provider value={authContext}>
      { userToken !== null ? (
        <View>
          <Text>
            Hiiiiiiii
          </Text>
          </View>
      )
    :
    (
      <View>
        <Text>
          Hiiiiiiii
        </Text>
        </View>
    )
    }

</AuthContext.Provider>
  );
  }
