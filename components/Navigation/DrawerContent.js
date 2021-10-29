import * as React from "react";
import { DrawerItem , DrawerContentScrollView } from "@react-navigation/drawer";
import {Avatar , Title , Caption , Paragraph , Drawer , Text , TouchableRipple , Switch} from "react-native-paper"
import {  StyleSheet,  View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
const DrawerContent=({navigation , props})=>{
return (
<View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                            icon={({color, size}) => (
                              <Icon name="home-export-outline" size={size} color={color} />
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate("Home Services")}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Icon name="face-outline" size={size} color={color}/>
                            )}
                            label="Profile"
                            onPress={() => {navigation.navigate("Profile")}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <SimpleLineIcons name="settings" size={size} color={color} />
                            )}
                            label="Settings"
                            onPress={() => {navigation.navigate('Settings')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Ionicons name="information-circle-outline" size={size} color={color} />
                            )}
                            label="About Us"
                            onPress={() => {navigation.navigate('AboutUs')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                              <Icon name="email-minus-outline" size={size} color={color}/>                            )}
                            label="Contact Us"
                            onPress={() => {navigation.navigate('ContactUs')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                              <MaterialIcons name="home-repair-service" size={size} color={color} />
                            )}
                            label="SignUp As a Worker"
                            onPress={() => {navigation.navigate('WorkersJoin')}}
                        />
                    </Drawer.Section>
               
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                      <AntDesign name="logout" size={size} color={color} />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
            </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
