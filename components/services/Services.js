import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../SearchBar';
import RecentServices from '../listView/RecentServices';
import tempData from './tempData';
import HeaderStart from '../../components/HeaderStart';

import ServicesView from '../listView/ServicesView';
export default function Services({ navigation }) {
  const [Services, setServices] = tempData;
  const recentServices = tempData.filter(item => item.id === 1);
 // Services = tempData;
    //const response = fetch("http://localhost:1321/application/services");
    //const data = response.json();
  //  setServices(Services);
  
  const [loading , setLoading]= useState(false);
  return (
    
    <ScrollView style={styles.container}>
      <SearchBar />
      <HeaderStart />

      <RecentServices data={recentServices} />
      <ServicesView OnPress={() => navigation.replace('AskAddSerInf')}  data={tempData} />
    </ScrollView>


  );
}
const styles = StyleSheet.create({
  container: {

    paddingHorizontal: 15
  },
})
