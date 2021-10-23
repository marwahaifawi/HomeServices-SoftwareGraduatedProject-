import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { theme } from '../../core/theme';
import BackButton from '../Buttons/BackButton';
import Title from '../Texts/Title';
export default function AskAddSerInf({ navigation}) {
    return (
        <View style={styles.container}>
          <BackButton goBack={() => navigation.navigate('HomePage')}/>

            <Title fontFamily={{ fontFamily: 'FontTwo' }} size={{ fontSize: 30 }}>
                Add Service Information
            </Title>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
 
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'space-between',
        padding: 10,

    },
})
