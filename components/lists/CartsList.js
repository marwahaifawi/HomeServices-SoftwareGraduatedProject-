import React, { useEffect, useState} from 'react';
import { View, StyleSheet, ScrollView } from "react-native";
import Title from '../Texts/Title';
import ShoppingCard from "../Cards/ShoppingCard";
export default function CatrtsList({ title, data, fontFamily,email}) {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' , paddingLeft:10, paddingTop:10 , backgroundColor:'white' }}>
                <Title color={{color:'#e0a910'}} fontFamily={fontFamily} size={{fontSize:30}}>{title}</Title>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.container}>
                    {data.map(item =>
                        <ShoppingCard
                            item={item}
                            email={email}
                            key={String(item.id)}
                        />)}
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor:'white'
    }
});