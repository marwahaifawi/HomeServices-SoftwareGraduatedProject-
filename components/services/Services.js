import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image,TextInput } from 'react-native';
import { theme } from '../../core/theme';
import ServicesView from '../listView/ServicesView';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Services({ navigation , data }) {
  const [servicesData, setServices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [Search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
    return () => {    
    }
  }, [])
  const fetchData = () => {
    fetch("http://192.168.1.109:1321/getservices")
    .then((response) => response.json())
    .then((responsejson) => {
      setFiltered(responsejson);
      setServices(responsejson);
    }).catch((error) =>{
     console.log(error);
    })
  }
  const onSearch = (text) => {
    if (text) {
       const tempList = servicesData.filter((item) =>{
       const itemdata=  item.name ?
       item.name.toUpperCase()
       :
       ''.toUpperCase();
    const data=text.toUpperCase();
    return itemdata.indexOf(data) >- 1;
      });
  setFiltered(tempList);
  setSearch(text);
  }
  else{
    setFiltered(servicesData);
    setSearch(text);
  }
}
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image style={{ alignSelf: 'center', marginTop: 10, width: 50, height: 50 }} source={require('../../assets/justlogo.png')} />
        <Text style={{
          width: '50%',
          marginTop: 30,
          flexDirection: 'row',
          alignSelf: 'center',
          fontSize: 20,
          fontFamily: 'FontThree',
          color: theme.colors.primary
        }}>HOME SERVICES</Text>

      </View>
      <View style={styles.containersearch}>
        <MaterialCommunityIcons name="home-search-outline" size={25} color='lightgrey' />
        <TextInput
          style={styles.searchInput}
          value={Search}
          placeholder={"Search services"}
          onChangeText={(text)=> onSearch(text)}
        />
      </View>
      <View style={styles.body}>
        <ServicesView data={filtered} email={data} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 9,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 5
  },
  containersearch: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    marginTop: 10,
    padding: 10,

  },
  searchInput: {
    height: '100%',
    width: '90%',
    fontSize: 17,
    fontFamily: 'FontTwo',
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: "lightgray",
    marginLeft: 7
  },
  searchIcon: {
    width: "10%",
    height: '100%',
  }
})
//<HeaderStart OnPress={() => navigation.navigate('AboutUs')}  />
