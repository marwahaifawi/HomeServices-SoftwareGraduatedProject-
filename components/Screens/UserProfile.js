import React, { useState , useEffect } from 'react';
import { TouchableOpacity, View,Text  } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context.js';
import { AntDesign } from '@expo/vector-icons';

export default function UserProfile({route}) {
  const {name}=route.params;
  const {email}=route.params;
  const {signOut}= React.useContext(AuthContext);

  const navigation = useNavigation();
  return (

      
         <>
         <Text>
      {name}
      {email}
    </Text>
    <TouchableOpacity   onPress={() => {signOut()}}>
    <AntDesign name="logout" size={15} color='gray' />

    </TouchableOpacity>
    </>
  )
  }
