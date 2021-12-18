import React from "react";
import { View,  StyleSheet, ScrollView } from "react-native";
import VerticalCards from "../Cards/VerticalCards";
import Title from '../Texts/Title';
import { useNavigation } from '@react-navigation/native';
import { ImageSlider } from "react-native-image-slider-banner";

const VerticalList = ({ title, data , fontFamily , OnPress , email}) => {
  const navigation = useNavigation();
  return (
    <>
    <View style={{height:40 ,justifyContent:'center'}}>
       <Title  fontFamily={fontFamily} size={20}>{title}</Title>
    </View>  
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageSlider 
    data={[
        {img: 'https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755682_960_720.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_960_720.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/12/07/10/59/building-1080594_960_720.jpg'}
    ]}
    autoPlay={true}
    closeIconColor="#fff"
/>
      <View style={style.container}>
         {data.map(item =>
          <VerticalCards 
          OnPress={() => navigation.navigate('AskAddSerInf', {item:item , email:email})}
          item={item} 
          key={String(item.id)}
          /> )}        
         </View>
         </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
 container:{
   flexDirection:'row',
   flexWrap:'wrap',
   justifyContent:'space-between'
 }
});

export default VerticalList;
