import React from 'react';
import { TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../core/theme';
export default function BackButton({ navigation}) {
  return (
    <TouchableOpacity onPress={()=> navigation.goBack()}  >
   
        <Ionicons name="ios-arrow-back-circle-outline" size={33} color={theme.colors.primary} />
     
    </TouchableOpacity>
  );
};
