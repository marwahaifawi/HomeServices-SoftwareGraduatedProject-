import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import SearchBar from '../SearchBar';
import RecentServices from '../listView/RecentServices';
import tempData from './tempData';
import TabsScreen from "../Screens/Home/TabsScreen";
import HeaderStart from '../../components/HeaderStart';
import ServicesView from '../listView/ServicesView';
import { NavigationContainer } from '@react-navigation/native';
export default function Services({ navigation }) {
  const [Services, setServices] = tempData;
  const recentServices = tempData.filter(item => item.id === 6);
  // Services = tempData;
  //const response = fetch("http://localhost:1321/application/services");
  //const data = response.json();
  //  setServices(Services);


  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
      </View>
      <View style={styles.body}>
        <ScrollView>
          <HeaderStart />
          <RecentServices data={recentServices} />
          <ServicesView OnPress={() => navigation.navigate('AskAddSerInf')} data={tempData} />
        </ScrollView>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 10
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 7
  }
})
