import React, { useState } from 'react';
import { TouchableOpacity, View,Text  } from 'react-native';
import { theme } from '../../../core/theme';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Logo from '../Logo';

export default function ContactUs({ navigation }) {
  return (
 <View style={{ backgroundColor:theme.colors.primary  , height:'100%' , width:'100%' }}>
   <View style={{marginTop:20, backgroundColor:'white', width:'100%'  , height:190}}>   
   <Logo />
     <Text style={{ marginTop:8,color:theme.colors.secondary, fontSize:30 , fontFamily:'FontThree' , marginLeft:110}}>
         Contact Us
     </Text>
    </View>
    <View style={{height:'80%' , backgroundColor:'white', borderTopRightRadius: 200, marginTop:80}}>
      <View style={{marginLeft:30, marginTop:100 , flexDirection:'row'}}>
      <Feather name="phone" size={24} color={theme.colors.secondary}/>       
       <Text style={{color:theme.colors.primary , fontSize:19 , paddingLeft:10 , fontFamily:'FontTwo' }}>
          (+972)0595167258
        </Text>
      </View>
      <View style={{marginLeft:30, marginTop:50 , flexDirection:'row'}}>
      <MaterialIcons name="email" size={23} color={theme.colors.secondary} />
       <Text style={{color:theme.colors.primary , fontSize:17 , paddingLeft:10 , fontFamily:'FontTwo' }}>
          home.services.10102@gmail.com
        </Text>
      </View>
      <View style={{marginLeft:30, marginTop:50 , flexDirection:'row'}}>
      <MaterialCommunityIcons name="facebook" size={24} color={theme.colors.secondary} />
       <Text style={{color:theme.colors.primary , fontSize:19 , paddingLeft:10 , fontFamily:'FontTwo' }}>
          homeservices
        </Text>
      </View>
    </View>
 </View>
  );
}
