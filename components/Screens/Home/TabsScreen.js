import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from '../LogIn/LogIn';
import ShopStore from '../../ShopStore/ShopStore';
import Settings from '../LogIn/LogIn';
import HomePage from './HomePage';
const Tabs = createBottomTabNavigator();
export default function TabsScreen({ navigation }) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomePage} />
      <Tabs.Screen name="Store" component={ShopStore} />
      <Tabs.Screen name="Profile" component={LogIn} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>

  );
};
