import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import SearchBar from '../SearchBar';
import RecentServices from '../listView/RecentServices';
import tempData from './tempData';
import { useIsFocused } from "@react-navigation/native";
import HeaderStart from '../../components/HeaderStart';
import ServicesView from '../listView/ServicesView';
import { NavigationContainer } from '@react-navigation/native';
import { useFocusEffect } from "@react-navigation/native";

export default function Services({ navigation }) {
  const recentServices = tempData.filter(item => item.id === 6);
  const [servicesData, setServices] = React.useState([]);
  // Services = tempData;
  //const response = fetch("http://localhost:1321/application/getservices");
  //const data = response.json();
  //  setServices(Services);
  async function fetchData() {
    const response = await fetch(
      "http://192.168.1.108:1321/getservices"
    );
    const servicesData = await response.json();
    setServices(servicesData);
  }
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    })
  );

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
          <ServicesView OnPress={() => navigation.navigate('AskAddSerInf')} data={servicesData} />
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
