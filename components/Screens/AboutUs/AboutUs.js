import React from 'react';
import { View ,Text , StyleSheet , Image , ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function AboutUs({ navigation }) {
    return (
        <ScrollView>
          <Animatable.View   style={styles.container}>
       <Animatable.View animation="flash" iterationCount={1}  style={styles.viewOne}> 
           <Image  source={require('../../../assets/AboutUs0.png')} style={{width:'100%'}} /> 
           <Text style={styles.textOne}>
               Home Services is an application for you to connect easily to workers and services.           </Text>
          <Text style={styles.textOne}>Our application show different services and then collect information to apply them to the worker you want to connect.</Text>
    
        </Animatable.View>
        <Animatable.View animation="flash" iterationCount={1} style={styles.viewTwo}> 
           <Image  source={require('../../../assets/AboutUs2.png')} style={{width:'100%'}} /> 
           <Text style={styles.textOne}>
               Our Workers will appear on a list depending on the service you choose and you can search for spacific worker by his name and
               you can filter them by their name or location or price.         
            </Text>
        </Animatable.View>
        <Animatable.View animation="flash" iterationCount={2} style={styles.viewThree}> 
           <Image  source={require('../../../assets/aboutUs1.png')} style={{width:'100%'}} /> 
           <Text style={styles.textOne}>
             You can choose the day you want the service on and workers will be ready.After choose the worker he will accept 
             your request and then you can chatting and conneting for more information.              
            </Text>
        </Animatable.View>
    
   </Animatable.View></ScrollView>
   
    );
  }
  const styles =
StyleSheet.create({
    viewOne:{
       width: '100%',
  

    },
    viewTwo:{
        width: '100%',
        marginTop:10
     },
     viewThree:{
        width: '100%',
        marginTop:10
     },
    textOne:{
      fontSize: 20, 
      fontFamily:'FontTwo', 
      marginTop:10, 
      color: 'gray'
  
    },
      
  container:{
    backgroundColor:'white',
    height:'100%', 
    padding:15,
alignContent:'center',
   },
   
  });
  
