import React, { Component ,useState ,useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback ,TouchableOpacity} from "react-native";
import Title from "../Texts/Title";
import { theme } from "../../core/theme";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function CardSquare({email,plusicon, loveicon ,colorIcon, color, style, styleImage, item, size, FontFamily , OnPress , iconname , price}) {
  const { name } = item;
  const Name = iconname;
  const Icon = loveicon;
  const [state, setState] = useState(item.liked);
  const [favorites, setFavorites] = useState([]);
  const [Shoppinglist, setShoppinglist] = useState([]);
  const fetchData = () => {
    fetch("http://192.168.1.109:1321/Fav?email="+email)
    .then((response) => response.json())
    .then((responsejson) => {
      setFavorites(responsejson);
      console.log(responsejson);
    }).catch((error) =>{
     console.log(error);
    })
    console.log(favorites);
  }
  const fetchData1 = () => {
    fetch("http://192.168.1.109:1321/shoppinglistScreen?email=" + email)
        .then((response) => response.json())
        .then((responsejson) => {
            setShoppinglist(responsejson);
            console.log(responsejson);
        }).catch((error) => {
            console.log(error);
        })
        console.log(Shoppinglist);
}
  const shoppinglistAdd = ( name , price , image , id ) =>
  {
   fetch("http://192.168.1.109:1321/shoppinglistAdd", {
     method: "POST",
     headers:{
       'Accept': 'application/json',
       'Content-Type':'application/json'
   },
     body: JSON.stringify({
       email:email, 
       name:name,
       price:price,
       image:image,
       id: id,
     }),
   })
     .then((response) => response.json())
     .then((res) => {
       if (res.success === true)
       {
        alert(res.message);
       }
       else {
         alert(res.message);
         console.log(res);
         console.log("err")
       }
     })
     .done();
 };
  const addToFav = (id , name , price , image, liked) =>
  {
   existed(name);
   if(favorites.length==0){
   fetch("http://192.168.1.109:1321/favouritesAdd", {
     method: "POST",
     headers:{
       'Accept': 'application/json',
       'Content-Type':'application/json'
   },
     body: JSON.stringify({
       email:email,
       id: id,
       name:name,
       price:price,
       image:image,
       liked:liked
     }),
   })
     .then((response) => response.json())
     .then((res) => {
       if (res.success === true)
       {
        alert(res.message);
       }
       else {
         alert(res.message);
         console.log(res);
         console.log("err")
       }
     })
     .done();
    }
    else{
      alert('this item existed !')
    }
 };
 const existed = (text) => {
  if (text) {
    const tempList = favorites.filter((item) =>{
     const itemdata=  item.name ?
     item.name.toUpperCase()
     :
     ''.toUpperCase();
  const data=text.toUpperCase();
  return itemdata.indexOf(data) >- 1;
    });
  setFavorites(tempList);
}
}
 const deleteFav  = (id) => {
  fetch("http://192.168.1.109:1321/deleteFav", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
            id: id,
    }),
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.success === true) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    })
    .done();
};
useEffect(() => {
  fetchData();
  fetchData1();
}, [])
  return (
    <TouchableOpacity onPress={OnPress} >
      <Animatable.View animation="pulse" iterationCount={2} direction="alternate" style={[styles.container, style]}> 
      <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={() => email.length !== 0 ? [ setState(!state), !state? addToFav(item.id , item.name , item.price , item.image , 1):deleteFav(item.id)]:alert('Please Login!')}> 
            <MaterialCommunityIcons name={Icon} size={35} color={state==0 ?colorIcon:'red'} />
      </TouchableOpacity>
        <Image  style={[styles.HeadImage, styleImage]} source={{uri:item.image}} />
        <MaterialIcons  name={Name} size={38} color={theme.colors.secondary} />
        <View style={styles.contentContainer}>
          <Title  fontFamily={FontFamily} size={size}>{name}</Title>
          <View style={{flexDirection:'row', justifyContent:'space-between', paddingRight:2,}}>   
          <Text style={[styles.text,color={color}]}>{price}</Text>
          <TouchableOpacity style={{alignSelf:'flex-end', marginRight:-20 , marginBottom:-20, width:40, justifyContent:'center', alignItems:'center', height:40, borderRadius:'100%', backgroundColor:theme.colors.secondary}} onPress={() =>email.length !== 0 ? shoppinglistAdd(item.name , item.price , item.image,  item.id  ):alert('Please Login!')}>
            <MaterialCommunityIcons name={plusicon} size={24} color='white'  />
          </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </TouchableOpacity>
  )
  
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 240,
    borderRadius: 5,
    backgroundColor: "#ffff",
    marginTop: 10
  },
  text:{
    fontSize: 18,
    fontWeight: '600',
    alignSelf:'center',
    fontFamily:'FontThree'
  },
  HeadImage: {
    width: "100%",
    height: 150
  },
  contentContainer: {
    padding: 5,
    width: "100%",
  }
})