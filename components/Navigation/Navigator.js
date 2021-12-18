import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from '../Screens/StartPage/StartPage';
import SlideItem from '../Screens/FirstSlides/Slider';
import HomePage  from '../Screens/Home/HomePage';
import SpacificQuestions from '../services/SpacificQuestions';
import ResetPasswordScreen from '../Screens/ResetPasswordScreen/ResetPasswordScreen';
import AuthScreen from '../Screens/AuthScreen';
import AskAddSerInf from '../services/AskAddSerInf';
import Questions from '../services/Questions';
import Cart from '../ShopStore/Cart';
import ConfirmOrder from '../ShopStore/ConfirmOrder';
import UserLocation from '../ShopStore/UserLocation';
import ProductDetails from '../ShopStore/productDetails';
import WorkerProfile from '../services/WorkerProfile';
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
        <Stack.Screen name="HomePage"  component={HomePage}  />
        <Stack.Screen name="ResetPasswordScreen"  component={ResetPasswordScreen} />
        <Stack.Screen name="productDetails"       component={ProductDetails}      />
        <Stack.Screen name="workerProfile"        component={WorkerProfile}      />
        <Stack.Screen name="SpacificQuestions"      component={SpacificQuestions}      />
        <Stack.Screen name="AskAddSerInf"           component={AskAddSerInf}  />
        <Stack.Screen name="Questions"           component={Questions}  />
        <Stack.Screen name="AuthScreen"             component={AuthScreen} />
        <Stack.Screen name="Cart"                   component={Cart} />
        <Stack.Screen name="ConfirmOrder"           component={ConfirmOrder} />
        <Stack.Screen name="UserLocation"           component={UserLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;