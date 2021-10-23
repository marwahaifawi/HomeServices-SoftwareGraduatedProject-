import * as React from "react";
import Services from "../../services/Services";
import LogIn from "../LogIn/LogIn";
import ActivityAnimation from '../../ActivityAnimation';
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
//<ActivityAnimation visible={true} />
export default function HomePage({ navigation }) {
  return (
    <><Drawer.Navigator
      initialRouteName="Services"

    >
      <Drawer.Screen name="Services" component={Services} />
      <Drawer.Screen name="Profile" component={LogIn} />
    </Drawer.Navigator>

    </>
  
  );
}
