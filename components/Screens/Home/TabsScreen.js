import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStore from '../../ShopStore/ShopStore';
import { Notification } from '../Notification';
import { YourReq } from '../YourReq';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../core/theme';
import Services from '../../services/Services';
import {View } from 'react-native';
const Tabs = createBottomTabNavigator();
export default function  TabsScreen ({email})
{
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarActiveBackgroundColor:theme.colors.secondary,
        tabBarActiveTintColor:theme.colors.secondary
      }}
      initialRouteName="Home"
    >
      <Tabs.Screen name="Home" children={() => 
          <Services
          data={email}
          />} 
        options={{
          tabBarActiveTintColor: theme.colors.secondary,
          tabBarActiveBackgroundColor:theme.colors.secondary,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name="home" size={focused ? 25: 20} color={focused ? theme.colors.surface : "gray"} />
            </View>
          ),
        }} />
      <Tabs.Screen name="Store" children={() => 
          <ShopStore
          data={email}
          />} 
        options={{
            tabBarActiveBackgroundColor: theme.colors.primary,
        tabBarIcon: ({ focused }) => (
          <View>
            <Fontisto name="shopping-store" size={focused ? 25: 20} color={focused ? theme.colors.surface : 'gray'} />
          </View>
        ),
      }} />
      <Tabs.Screen name="Notifications" children={() => 
          <Notification
          data={email}
          />} 
          options={{
          tabBarActiveBackgroundColor:theme.colors.secondary,
          tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name="notifications" size={focused ? 25: 20} color={focused ? theme.colors.surface  : 'gray'} />
          </View>
        ),
      }} />
      <Tabs.Screen name="YourReq" children={() => 
          <YourReq
          data={email}
          />} 
          options={{
          tabBarActiveBackgroundColor:theme.colors.primary,
          tabBarIcon: ({ focused }) => (
          <View>
               <MaterialIcons name="work-outline" size={focused ? 25: 20} color={focused ? theme.colors.surface  : 'gray'}  />          
          </View>
        ),
      }} />
    </Tabs.Navigator>
  );
};
