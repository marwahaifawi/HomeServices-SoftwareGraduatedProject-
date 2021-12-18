import React, { useState , useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image , TextInput } from 'react-native';
import ProductsView from '../listView/ProductsView';
import { theme } from '../../core/theme';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation , useFocusEffect } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

export default function ShopStore({data}) {
  const [Products, setProducts] =   useState([]);
  const [filtered, setFiltered] =   useState([]);
  const [Search  , setSearch  ] =   useState('');
  let email=data;
  let mounted = true;
  const [Shoppinglist, setShoppinglist] = useState([]);
  const navigation = useNavigation();
  const [loading, setloading] = useState(true);
  const fetchData = () => {
    fetch("http://192.168.1.109:1321/getproducts")
    .then((response) => response.json())
    .then((responsejson) => {
      if (mounted) {
        setloading(false)
    }
      setFiltered(responsejson);
      setProducts(responsejson);
    }).catch((error) =>{
     console.log(error);
    })
  }
  const fetchData1 = () => {
    fetch("http://192.168.1.109:1321/shoppinglistScreen?email=" + email)
        .then((response) => response.json())
        .then((responsejson) => {
          if (mounted) {
            setloading(false)
        }
            setShoppinglist(responsejson);
        }).catch((error) => {
            console.log(error);
        })}
  const onSearch = (text) => {
    if (text) {
      const tempList = Products.filter((item) =>{
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
    setFiltered(Products);
    setSearch(text);
  }
}
useEffect(() => {
  fetchData1();
  fetchData();
    return function cleanup() {
      mounted = false
  }
}, [])
//---------------------------------------------------------------------------------
if(loading){
   return <AppLoading />;
}

 else return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' , width:'100%' }}>
        <Image style={{ alignSelf: 'center', marginTop: 10, width: 50, height: 50 }} source={require('../../assets/justlogo.png')} />
        <Text style={{
          width: '50%',
          marginTop: 30,
          flexDirection: 'row',
          alignSelf: 'center',
          fontSize: 20,
          fontFamily: 'FontThree',
          color: theme.colors.primary
        }}>HOME SERVICES
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
          <View style={styles.containersearch}>
      <MaterialCommunityIcons name="home-search-outline" size={25} color='lightgrey' />
        <TextInput
          style={styles.searchInput}
          value={Search}
          placeholder={"Search products"}
          onChangeText={(text)=> onSearch(text)}
        />
      </View>
      <View style={{
            position: 'absolute', height: 18, width: 18, borderRadius: 15, backgroundColor: 'rgba(97, 177, 230,0.8)', right: 45, bottom: 28, alignItems: 'center', justifyContent: 'center', zIndex: 2000,
        }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{Shoppinglist.length}</Text>  
        </View>
      <TouchableOpacity style={{alignSelf:'center' , marginLeft:15 , marginTop:7}} onPress={() => navigation.navigate('Cart', data)}> 
        <FontAwesome name="shopping-cart" size={30} color= 'grey' />
      </TouchableOpacity>
      <TouchableOpacity style={{alignSelf:'center' , marginLeft:15 , marginTop:7}}  onPress={() => navigation.navigate('Favorite' , data)} >
      <MaterialCommunityIcons name="heart-box-outline" size={30} color="red" />
      </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <ProductsView data={filtered}  email={email}/>
      </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container:
  {
    paddingHorizontal: 15,
    flex: 10,
  },
  header: 
  {
    flex: 1,
  },
  body: 
  {
    flex: 7
  },
  containersearch: 
  {
    height: 50,
    width: '75%',
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    marginTop: 10,
    padding: 10,

  },
  searchInput: 
  {
    height: '100%',
    width: '90%',
    fontSize: 17,
    fontFamily: 'FontTwo',
    paddingLeft:10,
    borderLeftWidth:1,
    borderLeftColor:"lightgray",
    marginLeft:7
  },
  searchIcon: 
  {
    width: "10%",
    height: '100%',
  }
})
