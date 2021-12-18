import React, { useState, useEffect } from 'react';
import LogIn from "../../Screens/LogIn/LogIn";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Title, Caption, Drawer} from "react-native-paper"
import AboutUs from "../AboutUs/AboutUs";
import Workers from "../../services/Workers";
import WorkersJoin from "../../Screens/WorkersJoin";
import ContactUs from "../../Screens/ContactUs/ContactUs";
import UserProfile from "../../Screens/UserProfile";
import ShopStore from "../../ShopStore/ShopStore";
import DrawerNavigator from '../../Navigation/DrawerNavigator';
import Questions from '../../services/Questions';
import ResetPasswordScreen from "../../Screens/ResetPasswordScreen/ResetPasswordScreen";
import SignUp from "../../Screens/SignUp/SignUp";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from '../../context';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Cart from '../../ShopStore/Cart';
import ConfirmOrder from '../../ShopStore/ConfirmOrder';
import UserLocation from '../../ShopStore/UserLocation';
import Favorite from '../../ShopStore/Favorite';
import ProductDetails from '../../ShopStore/productDetails';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
const Drawers = createDrawerNavigator();
export default function HomePage({ navigation }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const authContext = React.useMemo(() => {
    return {
      signIn: async (email, password, name) => {
        setIsLoading(false);
        setUserToken('ifjo');
        setEmail(email);
        setName(name);
        setPassword(password);
        console.log(email, password, name)
      },
      signOut: async () => {
        setIsLoading(false);
        setUserToken(null);
      },
      signUp: async (email, password, name) => {
        setUserToken('fgkj');
        setIsLoading(false);
        setEmail(email);
        setName(name);
        setPassword(password);
        console.log(email, password, name)

      }
    };
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      {userToken ? (
        <Drawers.Navigator
          options={{ headerShown: false }}
          drawerContent={props => {
            return (
              <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                  <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                      <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                          <Title style={styles.title}>{name}</Title>
                          <Caption style={styles.caption}>{email}</Caption>
                        </View>
                      </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem
                        icon={({ color, size }) => (
                          <Icon name="home-export-outline" size={size} color={color} />
                        )}
                        label="Home"
                        onPress={() => { props.navigation.navigate("Home Services", { email: email, name: name }) }}
                      />
                      <DrawerItem
                        icon={({ color, size }) => (
                          <Icon name="face-outline" size={size} color={color} />
                        )}
                        label="Profile"
                        onPress={() => { props.navigation.navigate("Profile", { email: email, name: name }) }}
                      />
                      <DrawerItem
                        icon={({ color, size }) => (
                          <Ionicons name="information-circle-outline" size={size} color={color} />
                        )}
                        label="About Us"
                        onPress={() => { props.navigation.navigate('AboutUs') }}
                      />
                      <DrawerItem
                        icon={({ color, size }) => (
                          <Icon name="email-minus-outline" size={size} color={color} />)}
                        label="Contact Us"
                        onPress={() => { props.navigation.navigate('ContactUs') }}
                      />
                      <DrawerItem
                        icon={({ color, size }) => (
                          <MaterialIcons name="home-repair-service" size={size} color={color} />
                        )}
                        label="SignUp As a Worker"
                        onPress={() => { props.navigation.navigate('WorkersJoin') }}
                      />
                    </Drawer.Section>
                  </View>
                </DrawerContentScrollView>
              </View>
            );
          }
          }
          initialRouteName="Home Services">
          <Drawers.Screen options={{ headerShown: false }} name="Home Services" children={() =>
            <DrawerNavigator
              data={email}
            />} />
          <Drawers.Screen options={{ headerShown: false }} name="Profile" component={UserProfile} />
          <Drawers.Screen options={{ headerShown: false }} name="Cart" component={Cart}/>
          <Drawers.Screen options={{ headerShown: false }} name="Favorite" component={Favorite}/>
          <Drawers.Screen options={{ headerShown: false }} name="productDetails" component={ProductDetails} />
          <Drawers.Screen options={{ headerShown: false }} name="LogIn" component={UserProfile} />
          <Drawers.Screen options={{ headerShown: false }} name="AboutUs" component={AboutUs} />
          <Drawers.Screen options={{ headerShown: false }} name="ContactUs" component={ContactUs} />
          <Drawers.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
          <Drawers.Screen options={{ headerShown: false }} name="Workers" component={Workers} />
          <Drawers.Screen options={{ headerShown: false }} name="ShopStore" component={ShopStore} />
          <Drawers.Screen options={{ headerShown: false }} name="UserLocation" component={UserLocation} />
          <Drawers.Screen options={{ headerShown: false }} name="ConfirmOrder" component={ConfirmOrder} />
          <Drawers.Screen options={{ headerShown: false }} name="WorkersJoin" component={WorkersJoin} />
          <Drawers.Screen options={{ headerShown: false }} name="ResetPasswordScreen" component={ResetPasswordScreen} />
        </Drawers.Navigator>
      )
        :
        (
          <Drawers.Navigator
            screenOption={{ headerShown: false }}
            drawerContent={props => {
              return (
                <View style={{ flex: 1 }}>
                  <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                      <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                          <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                          </View>
                        </View>
                      </View>
                      <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                          icon={({ color, size }) => (
                            <Icon name="home-export-outline" size={size} color={color} />
                          )}
                          label="Home"
                          onPress={() => { props.navigation.navigate("Home Services") }}
                        />
                        <DrawerItem
                          icon={({ color, size }) => (
                            <Icon name="face-outline" size={size} color={color} />
                          )}
                          label="Profile"
                          onPress={() => { props.navigation.navigate("Profile") }}
                        />
                        <DrawerItem
                          icon={({ color, size }) => (
                            <Ionicons name="information-circle-outline" size={size} color={color} />
                          )}
                          label="About Us"
                          onPress={() => { props.navigation.navigate('AboutUs') }}
                        />
                        <DrawerItem
                          icon={({ color, size }) => (
                            <Icon name="email-minus-outline" size={size} color={color} />)}
                          label="Contact Us"
                          onPress={() => { props.navigation.navigate('ContactUs') }}
                        />
                        <DrawerItem
                          icon={({ color, size }) => (
                            <MaterialIcons name="home-repair-service" size={size} color={color} />
                          )}
                          label="SignUp As a Worker"
                          onPress={() => { props.navigation.navigate('WorkersJoin') }}
                        />
                      </Drawer.Section>
                    </View>
                  </DrawerContentScrollView>
                </View>
              );
            }}
            initialRouteName="Home Services">
            <Drawers.Screen options={{ headerShown: false }} name="Home Services" children={() =>
              <DrawerNavigator
                data={email}
              />} />
            <Drawers.Screen options={{ headerShown: false }} name="LogIn" component={LogIn} />
            <Drawers.Screen options={{ headerShown: false }} name="Cart" component={LogIn} />
            <Drawers.Screen options={{ headerShown: false }} name="Profile" component={LogIn} />
            <Drawers.Screen options={{ headerShown: false }} name="AboutUs" component={AboutUs} />
            <Drawers.Screen options={{ headerShown: false }} name="ContactUs" component={ContactUs} />
            <Drawers.Screen options={{ headerShown: false }} name="Product Details" component={ProductDetails} />
            <Drawers.Screen options={{ headerShown: false }} name="WorkersJoin" component={WorkersJoin} />
            <Drawers.Screen options={{ headerShown: false }} name="Favorite" component={LogIn} />
            <Drawers.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
            <Drawers.Screen options={{ headerShown: false }} name="Workers" component={LogIn} />
            <Drawers.Screen options={{ headerShown: false }} name="UserLocation" component={UserLocation} />
            <Drawers.Screen options={{ headerShown: false }} name="ConfirmOrder" component={ConfirmOrder} />  
            <Drawers.Screen options={{ headerShown: false }} name="ResetPasswordScreen" component={ResetPasswordScreen} />
          </Drawers.Navigator>
        )}
    </AuthContext.Provider>
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
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  caption: {
    fontSize: 12,
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