import React from 'react'
import { StyleSheet, Text , View , TextInput ,Image } from 'react-native'
import { theme } from '../core/theme'
import { Ionicons } from '@expo/vector-icons';
const SearchBar =() => {
    return(
        <View style = {styles.container}> 
      
        <TextInput style={styles.searchInput} placeholder= 'Search services'/>
        </View>

    )
}
const styles = StyleSheet.create({
 container:{
  height:50,
  width:'100%',
  marginTop:10,
  backgroundColor:theme.colors.surface,
  borderRadius:8
 },
 searchInput:{
     height:'100%',
     width:'90%',
     paddingLeft:10,
     fontSize:17
 },
 searchIcon:{
  width:40,
  height:'100%'
 }
})
export default SearchBar;