import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStore from '../../ShopStore/ShopStore';
import { Notification } from '../Notification';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Chatting } from '../Chatting';
import { theme } from '../../../core/theme';
import Services from '../../services/Services';
import {View } from 'react-native';
const Tabs = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="Home"
    >
      <Tabs.Screen name="Home" component={Services}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>

              <FontAwesome name="home" size={25} color={focused ? theme.colors.primary : "gray"} />

            </View>
          ),
        }} />
      <Tabs.Screen name="Store" component={ShopStore} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Fontisto name="shopping-store" size={20} color={focused ? theme.colors.primary : 'gray'} />
          </View>

        ),
      }} />
      <Tabs.Screen name="Notifications" component={Notification} options={{
        tabBarIcon: ({ focused }) => (
          <View>

            <Ionicons name="notifications" size={24} color={focused ? theme.colors.primary : 'gray'} />

          </View>

        ),
      }} />
      <Tabs.Screen name="Chat" component={Chatting} options={{
        tabBarIcon: ({ focused }) => (
          <View>

            <Ionicons name="chatbubbles-sharp" size={24} color={focused ? theme.colors.primary : 'gray'} />
          </View>

        ),
      }} />
    </Tabs.Navigator>
  );
};
export default TabsScreen;