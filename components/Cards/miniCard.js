import React, {useEffect} from "react";
import { Image, StyleSheet, Text, View,TouchableOpacity} from "react-native";
import Title from "../Texts/Title";
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const MiniCard = ({ item, FontFamily, OnPress, email }) => {
    const fetchData = () => {
        fetch("http://192.168.1.109:1321/Fav?email=" + email)
            .then((response) => response.json())
            .then((responsejson) => {
                setFavorites(responsejson);
            }).catch((error) => {
                console.log(error);
            })
    }
    const deleteFav = (id) => {
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
                    fetchData();
                } else {
                    alert(res.message);
                }
            })
            .done();
    };
    useEffect(() => {
        fetchData();
        return () => {
        }
    }, [])
    return (
        <TouchableOpacity onPress={OnPress} >
            <Animatable.View animation="pulse" iterationCount={2} direction="alternate" style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.HeadImage} source={{ uri: item.image }} />
                    <View style={styles.info}>
                        <Title fontFamily={FontFamily} size={{ fontSize: 25 }}>{item.name}</Title>
                        <Text style={styles.text}>{item.price} nis</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{ marginTop: 57 , marginRight:20}} onPress={() => deleteFav(item.id)}>
                            <MaterialCommunityIcons name="home-remove" size={35} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 110,
        borderRadius: 10,
        backgroundColor: "#ffff",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    text: 
    {
        fontSize: 14,
        fontFamily: 'FontThree',
        marginTop: 10,
        color: 'gray',
        marginTop: 5
    },
    HeadImage: 
    {
        width: 100,
        marginRight: 5,
        height: 90,
        resizeMode: 'contain',
        marginTop: 15
    },
    info: {
        marginRight: 30,
        marginLeft:15,
        width: 150,
        paddingTop: 15
    }
})

export default MiniCard;
