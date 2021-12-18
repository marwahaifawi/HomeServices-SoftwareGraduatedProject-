import * as React from "react";
import TabsScreen from '../Screens/Home/TabsScreen'
export default function  DrawerNavigator ({data}) 
{
  console.log(data+'tabscreen');
  return (
  <TabsScreen email={data}/>
  );
}

