import React, { useState , useEffect } from 'react';
import LogIn from "../../Screens/LogIn/LogIn";
import DrawerContent from '../../Navigation/DrawerContent';
import AboutUs from "../AboutUs/AboutUs";
import AskAddSerInf from "../../services/AskAddSerInf";
import WorkersJoin from "../../Screens/WorkersJoin";
import ContactUs from "../../Screens/ContactUs/ContactUs";
import UserProfile from "../../Screens/UserProfile";
import DrawerNavigator from '../../Navigation/DrawerNavigator';
import Settings from "../../Screens/Settings/Settings";
import ResetPasswordScreen from "../../Screens/ResetPasswordScreen/ResetPasswordScreen";
import SignUp from "../../Screens/SignUp/SignUp";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {AuthContext} from '../../context';
import {View} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Cart from '../../ShopStore/Cart';
import ProductDetails from '../../ShopStore/productDetails';
const Drawer = createDrawerNavigator();
export default function HomePage({route , navigation}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 
  const authContext = React.useMemo(() => {
return{
    signIn: () => {
      setIsLoading(false);
      setUserToken('ifjo');
      //const userName = foundUser[0].username;
    },
    signOut: () => {
      setIsLoading(false);
      setUserToken(null);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    }
  };
}, []);
  useEffect(() => {
    setTimeout(async() => {
      setIsLoading(false);
      }, 1000);
  }, []);
 if(isLoading){
  return (
 <View>
     <ActivityIndicator size='large'/>
 </View>
  );
}
  
  return (
  <AuthContext.Provider value={authContext}>
    {userToken ? (
<Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home Services">
      <Drawer.Screen name="Home Services" component={DrawerNavigator} />
      <Drawer.Screen name="Profile" component={UserProfile} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="productDetails" component={ProductDetails} />
      <Drawer.Screen name="LogIn" component={LogIn} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="AskAddSerInf" component={AskAddSerInf} />
      <Drawer.Screen name="SignUp" component={SignUp} />

      <Drawer.Screen name="WorkersJoin" component={WorkersJoin} />
    </Drawer.Navigator>
    )
    :
    (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home Services">
      <Drawer.Screen name="Home Services" component={DrawerNavigator} />
      <Drawer.Screen name="Profile" component={LogIn} />
      <Drawer.Screen name="LogIn" component={LogIn} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Product Details" component={ProductDetails} />
      <Drawer.Screen name="AskAddSerInf" component={AskAddSerInf} />
      <Drawer.Screen name="WorkersJoin" component={WorkersJoin} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    </Drawer.Navigator>
    )}
  </AuthContext.Provider>
  );
}