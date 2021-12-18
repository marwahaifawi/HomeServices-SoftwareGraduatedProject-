import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../core/theme';
import { Ionicons } from '@expo/vector-icons';
const SearchBar = ({width , margin}) => {
    return (
        <View style={[styles.container , width]}>
            <TextInput style={styles.searchInput} placeholder='Search here' />
            <Pressable style={margin}>
                <MaterialCommunityIcons name="home-search-outline" size={23} color='grey' />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        borderRadius: 8,
        marginTop:10,
        padding: 10,
    

    },
    searchInput: {
        height: '100%',
        width: '90%',
        fontSize: 17, 
        fontFamily:'FontTwo'
    },
    searchIcon: {
        width: 40,
        height: '100%'
    }
})
export default SearchBar;