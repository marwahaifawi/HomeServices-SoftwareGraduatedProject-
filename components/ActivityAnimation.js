import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
const ActivityAnimation = ({visible}) => {
    if(!visible) return null;

    return (
        <View style={{height:'100%' , width:'100%' , alignItems:'center' , justifyContent:'center' , zIndex:1}}>
            <LottieView autoPlay={true} loop={true} source={require('../assets/loading.json')}/>

        
        </View>
    )
}

export default ActivityAnimation;
