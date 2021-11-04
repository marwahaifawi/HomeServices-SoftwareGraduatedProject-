import * as React from "react";
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
const Drawer = createDrawerNavigator();
const HomePage=()=>{
  return (
    <>
    <Drawer.Navigator
      ScreenOptions={{
        headerShown: true,
      }}
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home Services">
      <Drawer.Screen name="Home Services" component={DrawerNavigator} />
      <Drawer.Screen name="Profile" component={UserProfile} />
      <Drawer.Screen name="LogIn" component={LogIn} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="AskAddSerInf" component={AskAddSerInf} />
      <Drawer.Screen name="WorkersJoin" component={WorkersJoin} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    </Drawer.Navigator>
    </>
  );
}
export default HomePage;
