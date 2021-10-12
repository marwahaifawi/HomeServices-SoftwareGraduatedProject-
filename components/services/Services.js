import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import SearchBar from '../SearchBar';
import RecentServices from '../listView/RecentServices';
import tempData from './tempData';
import HeaderStart from '../../components/HeaderStart';
export default function Services({ navigation}) {
//const recentServices = tempData.filter(item => item.id === 4);
const recentServices = tempData;
  return (
    <View style={styles.container}>
           <SearchBar/>
           <HeaderStart/>
          <RecentServices data={recentServices} />
    </View>

   
  );
}
const styles= StyleSheet.create({
  container:{
 
   paddingHorizontal:15
  },
})
