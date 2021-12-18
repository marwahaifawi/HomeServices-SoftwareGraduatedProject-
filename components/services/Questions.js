import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, TextInput, Button, Image, ScrollView } from 'react-native';
import { theme } from '../../core/theme';
import { Ionicons } from '@expo/vector-icons';
import Title from '../Texts/Title';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Screens/Background';

export default function Questions({ route }) {
  const service = route.params;
  const navigation = useNavigation();
  console.log(service.name);
  const [pickedImagePath, setPickedImagePath] = useState('');
  const [pickedImagePath2, setPickedImagePath2] = useState('');
  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    const result2 = await ImagePicker.launchImageLibraryAsync();
    // Explore the result
    console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      setPickedImagePath2(result2.uri);
      console.log(result.uri);
    }
  }
  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    // Explore the result
    console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground style={styles.background} source={require('../../assets/ask.png')}>
        <View style={styles.container}>
          <Title size={{ fontSize: 35 }} color={{ color: 'white' }} fontFamily={{ fontFamily: 'FontThree' }}>
            Fill Order
          </Title>
          <Text style={styles.text}>
            Add photos of your problem (optional)
          </Text>
          <View style={styles.screen}>
            <TouchableOpacity style={styles.buttonContainer} onPress={showImagePicker}>
              <Text style={{ color: theme.colors.surface, fontSize: 20, fontWeight: 'bold', fontFamily: 'FontThree' }}>
                Choose photoes
              </Text>
            </TouchableOpacity>
            <Text style={{ color: theme.colors.surface, fontSize: 20, fontWeight: 'bold', fontFamily: 'FontTwo', marginTop:20 }}>
              OR
            </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={openCamera}>
              <Text style={{ color: theme.colors.surface, fontSize: 20, fontWeight: 'bold', fontFamily: 'FontThree' }}>
                Take a photo
              </Text>
            </TouchableOpacity>
          </View>
          {
            pickedImagePath !== '' && <Image
              source={{ uri: pickedImagePath }}
              style={styles.image}
            />
          }
          {
            pickedImagePath2 !== '' && <Image
              source={{ uri: pickedImagePath2 }}
              style={styles.image}
            />
          }
          <View style={styles.button}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Workers',service)} >
              <Text style={{ paddingRight: 15, color: theme.colors.surface, fontSize: 30, fontWeight: 'bold', fontFamily: 'FontThree' }}>
                Next
              </Text>
              <Ionicons name="ios-arrow-redo-outline" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '200%',
    width: '100%',
    backgroundColor: "gray",
    padding: 20,
    opacity: 0.8,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    height:'200%'
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    width:'100%',
    fontFamily: 'FontThree',
    color: 'white'
  },
  postInput: {
    fontSize: 15,
    height: 150,
    borderColor: '#42435b',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingLeft: 10,
    fontFamily: 'FontTwo',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    fontFamily: 'FontThree',
    borderRadius: 20,
    marginTop: 100,
    width: 150,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: "black",
    fontFamily: 'FontThree',
    fontSize: 20,
    width: 200,
    borderRadius: 20,
    marginTop:20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginTop: 15
  }
})
