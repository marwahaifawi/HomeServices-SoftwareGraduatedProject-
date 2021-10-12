import * as React from "react";
import Services from "../../services/Services";
import LogIn from "../LogIn/LogIn";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function HomePage({ navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="Services"
 
    >
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Profile" component={LogIn} />
    </Drawer.Navigator>
  );
}
