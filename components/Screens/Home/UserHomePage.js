import * as React from 'react';
import Services from '../../services/Services';
import UserProfile from './UserProfile';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export default function UserHomePage({ navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Services" screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Profile" component={UserProfile} />
    </Drawer.Navigator>

  );
};
