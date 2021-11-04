import * as React from 'react';
import { Text, View , FlatList, Platform, TouchableOpacity, Image, Alert } from 'react-native';
import Styles from './SlidesComponentStyle';
import SlidesInfo from './SlidesInfo';
import SlideItem from '../FirstSlides/Slider';
import * as Animatable from 'react-native-animatable';

export default function SlideComponent ({navigation})
{
    return(
        <Animatable.View  style={Styles.container}>
           <FlatList
           data={SlidesInfo}
           renderItem={(item)=>
           <SlideItem  slide={item}/>}
           />
        </Animatable.View>
    );
  };
 