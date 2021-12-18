import React, {useEffect , useState} from "react";
import { Image, StyleSheet, Text, View,TouchableOpacity, Dimensions, Linking } from "react-native";
import Title from "../Texts/Title";
import * as Animatable from 'react-native-animatable';
import { theme } from "../../core/theme";
import { useNavigation , useFocusEffect } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
const MiniShopCard = ({ item, FontFamily, OnPress, email , total }) => {
    const [Shoppinglist, setShoppinglist] = useState([]);
    const deleteshoppinglist = (id) => {
            fetch("http://192.168.1.109:1321/deleteshoppinglist", {
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
    return (
        <><TouchableOpacity onPress={OnPress}>
                <Animatable.View animation="pulse" iterationCount={2} direction="alternate" style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.HeadImage} source={{ uri: item.image }} />
                        <View style={styles.info}>
                            <Title fontFamily={FontFamily} size={{ fontSize: 20 }}>{item.name}</Title>
                            <Text style={styles.text}>{item.price} nis</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={{ marginTop: 57, marginRight: 20, backgroundColor: '#e87979', borderRadius: '100%', width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }} onPress={() => deleteshoppinglist(item.id)}>
                                <Fontisto name="shopping-basket-remove" size={19} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
            </TouchableOpacity></>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        backgroundColor: "#ffff",
    },
    text: 
    {
        fontSize: 18,
        fontFamily: 'FontThree',
        color: 'gray',
    },
    HeadImage: 
    {
        width: 100,
        marginRight: 5,
        height: 100,
        resizeMode: 'contain',
        marginTop: 15, 
        borderWidth:1, 
        borderColor:'gray',
        borderRadius:15
    },
    info: {
        marginRight: 30,
        marginLeft:15,
        marginTop:20,
        width: 150,
        flexDirection:'row',
        paddingTop: 15,
        justifyContent:'space-between'
    }
})
export default MiniShopCard;
