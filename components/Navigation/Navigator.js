import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from '../Screens/StartPage/StartPage';
import SlideItem from '../Screens/FirstSlides/Slider';
import HomePage  from '../Screens/Home/HomePage';
import AuthScreen from '../Screens/AuthScreen';
const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='StartPage'
        screenOptions={{
        headerShown: false,}}>
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="SlideItem" component={SlideItem} />
        <Stack.Screen name="HomePage"  component={HomePage} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;