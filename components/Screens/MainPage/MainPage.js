import * as React from 'react';
import { Text, View} from 'react-native';
import Styles from './MainPageStyle';
export default function MainPage ({navigation}){
  return (
      <View style={Styles.container}>
          <Text>
              Hi this s main page
          </Text>
      </View>
  );
};