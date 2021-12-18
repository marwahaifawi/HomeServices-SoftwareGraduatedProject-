import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CardRectangle from "../Cards/CardRectangle";
import Title from '../Texts/Title';
import { useNavigation } from '@react-navigation/native';
import FavoritesCard from "../Cards/FavoritesCard";

export default function FavoritesList({ title, data, fontFamily,email}) {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20, height: 40, alignItems: 'center' , margin:20 }}>
                <Title fontFamily={fontFamily} size={30}>{title}</Title>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.container}>
                    {data.map(item =>
                        <FavoritesCard
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
        justifyContent: 'space-between'
    }
});