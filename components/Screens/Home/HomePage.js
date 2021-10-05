import * as React from 'react';
import { Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Styles from './HomePageStyle';
const Tabs = createBottomTabNavigator();
export default function HomePage ({navigation})
{
  return (
    <View>
      <Text>
        Hiii this is main screen
      </Text>
    </View>

  );
};
