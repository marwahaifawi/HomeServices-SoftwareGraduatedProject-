import React, { useState } from 'react';
import { TouchableOpacity, View,Text  } from 'react-native';
export default function UserProfile({ navigation, props }) {
  const [listOne, setListOne] = useState('');
  const email = props.route.params
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => setListOne(json));
  return (
 <View>
     <Text>
         Hiiii this is your profile
     </Text>
 </View>
  );
}
