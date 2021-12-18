import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { theme } from '../../core/theme';
import { Ionicons } from '@expo/vector-icons';
import Title from '../Texts/Title';
import { useNavigation } from '@react-navigation/native';

export default function AskAddSerInf({route}) {
    const product = route.params.item;
    const email   = route.params.email;
    console.log(product.name);
    const navigation = useNavigation();
    return (
        <ImageBackground style={styles.background} source={require('../../assets/ask.png')}>
            <View style={styles.container}>
                <Title fontFamily={{ fontFamily: 'FontTwo' }} size={{ fontSize: 35 }} color={{ color: 'white'}} >
                    Service Details
                </Title>
                <Text style={styles.text}>
                    We will collect more details about this service by asking you some questions to send it to our service providers.
                </Text>
                <View style={styles.button}>
                    <TouchableOpacity style={{flexDirection: 'row',}} onPress={() => navigation.navigate('SpacificQuestions' , {product:product , email: email})} >
                        <Text style={{ paddingRight: 15, color: theme.colors.surface, fontSize: 30, fontWeight: 'bold', fontFamily: 'FontThree' }}>
                            Let's Start
                        </Text> 
                        <Ionicons name="ios-arrow-redo-outline" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {

        height: '100%',
        backgroundColor: 'gray',
        opacity: 0.8,
        paddingTop: 180,
        paddingLeft: 25,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 23,
        marginTop: 10,
        fontFamily: 'FontTwo',
        color: 'white'
    },
    button: {
        backgroundColor: theme.colors.secondary,
        fontFamily: 'FontThree',
        fontSize: 20,
        borderRadius: 20,
        marginTop: 100,
        width: 250,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
