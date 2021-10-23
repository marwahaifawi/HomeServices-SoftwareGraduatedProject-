import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from '../Screens/StartPage/StartPage';
import SlideItem from '../Screens/FirstSlides/Slider';
import HomePage from '../Screens/Home/HomePage';
import LogIn from '../Screens/LogIn/LogIn';
import SignUp from '../Screens/SignUp/SignUp';
import TabsScreen from '../Screens/Home/TabsScreen';
import Dashboard from '../Screens/Dashboard/Dashboard';
import UserHomePage from '../Screens/Home/UserHomePage';
import Services from '../services/Services';
import AuthScreen from '../Screens/AuthScreen';
import AskAddSerInf from '../services/AskAddSerInf';
import ResetPasswordScreen from '../Screens/ResetPasswordScreen/ResetPasswordScreen';
import ShopStore from '../ShopStore/ShopStore';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator 
         initialRouteName="ShopStore"  
         screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="StartPage"   component={StartPage} />
        <Stack.Screen name="TabsScreen"   component={TabsScreen} />
        <Stack.Screen name="SlideItem"   component={SlideItem} />        
        <Stack.Screen name="HomePage"    component={HomePage} />
        <Stack.Screen name="Services"    component={Services} />
        <Stack.Screen name="UserHomePage"    component={UserHomePage} />
        <Stack.Screen name="LogIn"       component={LogIn} />
        <Stack.Screen name="ShopStore"       component={ShopStore} />

        <Stack.Screen name="AuthScreen"       component={AuthScreen} />
        <Stack.Screen name="AskAddSerInf"       component={AskAddSerInf} />
        <Stack.Screen name="SignUp"    component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;