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
const TabsScreen = ({name ,email}) => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor:theme.colors.secondary,
        tabBarActiveTintColor:theme.colors.secondary
      }}
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="Home"
    >
      <Tabs.Screen name="Home" component={Services}
        options={{
          tabBarActiveTintColor: theme.colors.secondary,
          tabBarActiveBackgroundColor:theme.colors.secondary,
          tabBarIcon: ({ focused }) => (
            <View>

              <FontAwesome name="home" size={focused ? 25: 20} color={focused ? theme.colors.surface : "gray"} />

            </View>
          ),
        }} />
      <Tabs.Screen name="Store" component={ShopStore} options={{
            tabBarActiveBackgroundColor: theme.colors.primary,
        tabBarIcon: ({ focused }) => (
          <View>
            <Fontisto name="shopping-store" size={focused ? 25: 20} color={focused ? theme.colors.surface : 'gray'} />
          </View>

        ),
      }} />
      <Tabs.Screen name="Notifications" component={Notification} options={{
          tabBarActiveBackgroundColor:theme.colors.secondary,
          tabBarIcon: ({ focused }) => (
          <View>

            <Ionicons name="notifications" size={focused ? 25: 20} color={focused ? theme.colors.surface  : 'gray'} />

          </View>

        ),
      }} />
      <Tabs.Screen name="Chat" component={Chatting} options={{
                    tabBarActiveBackgroundColor: theme.colors.primary,

        tabBarIcon: ({ focused }) => (
          <View>

            <Ionicons name="chatbubbles-sharp" size={focused ? 27: 20} color={focused ? theme.colors.surface : 'gray'} />
          </View>

        ),
      }} />
    </Tabs.Navigator>
  );
};
export default TabsScreen;