import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, TextInput, Button, Image, ScrollView } from 'react-native';
import { theme } from '../../core/theme';
import DropDownPicker from 'react-native-dropdown-picker';
import Title from '../Texts/Title';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Background from '../../components/Screens/Background';
export default function SpacificQuestions({ route }) {
    const service= route.params.product;
    const email = route.params.email;
    console.log(email+'questions');
    console.log(service.name);
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [value, setValue] = useState(null);
    const [input, setInput] = useState('');
    const [items, setItems] = useState([
        { label: 'Nablus', value: 'Nablus' },
        { label: 'Ramallah', value: 'Ramallah' },
        { label: 'Jenin', value: 'Jenin' }
    ]);
    const [items2, setItems2] = useState([
        { label: 'Repairs', value: 'Repairs' },
        { label: 'Installation', value: 'Installation' },
        { label: 'Other', value: 'Other' }
    ]);
    if (service.id === 1) {
        return (               
         <ScrollView showsVerticalScrollIndicator={false}>
            <Background>
                    <ImageBackground style={styles.background} source={require('../../assets/ask.png')}>
                        <View style={styles.container}>
                            <Title size={{ fontSize: 35 }} color={{ color: 'white' }} fontFamily={{ fontFamily: 'FontThree' }}>
                                Fill Order
                            </Title>
                            <Text style={styles.text}>
                                Select a City
                            </Text>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                            <Text style={[styles.text, { marginTop: 100 }]}>
                                Select a problem title
                            </Text>
                            <DropDownPicker
                                open={open2}
                                value={value2}
                                items={items2}
                                setOpen={setOpen2}
                                setValue={setValue2}
                                setItems={setItems2}
                            />
                            <Text style={[styles.text, { marginTop: 100 }]}>
                                Describe your problem clearly
                            </Text>
                            <TextInput
                                style={styles.postInput}
                                onChangeText={text => setInput({ ...input, body: text })}
                                multiline={true}
                                numberOfLines={3}
                                placeholder="Entre your text here"
                                placeholderTextColor='black'
                                require={true}
                            />
                            <View style={styles.button}>
                                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Questions', service)} >
                                    <Text style={{ paddingRight: 15, color: theme.colors.surface, fontSize: 30, fontWeight: 'bold', fontFamily: 'FontThree' }}>
                                        Next
                                    </Text>
                                    <Ionicons name="ios-arrow-redo-outline" size={28} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
            </Background>      
        </ScrollView>
        );
    }
    else if (service.id === 3 && email.length !== 0) {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground style={styles.background} source={require('../../assets/ask.png')}>
                    <View style={styles.container}>
                        <Title size={{ fontSize: 35 }} color={{ color: 'white' }} fontFamily={{ fontFamily: 'FontThree' }}>
                            Fill Order
                        </Title>
                        <Text style={styles.text}>
                            Select a City
                        </Text>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                        <Text style={[styles.text, { marginTop: 120 }]}>
                            How many rooms?
                        </Text>
                        <TextInput
                            style={styles.Input}
                            onChangeText={text => setInput({ ...input, body: text })}
                            placeholderTextColor='black'
                            require={true}
                        />
                        <Text style={styles.text}>
                            Wall Space (M x M)?
                        </Text>
                        <TextInput
                            style={styles.Input}
                            onChangeText={text => setInput({ ...input, body: text })}
                            placeholderTextColor='black'
                            require={true}
                        />
                        <Text style={styles.text}>
                            What is the colors?
                        </Text>
                        <TextInput
                            style={styles.Input2}
                            onChangeText={text => setInput({ ...input, body: text })}
                            placeholderTextColor='black'
                            require={true}
                        />
                        <View style={styles.button}>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('Workers', service)} >
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
        height: '200%'
    },
    text: {
        fontSize: 25,
        marginTop: 20,
        fontFamily: 'FontTwo',
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
    Input: {
        fontSize: 15,
        borderColor: '#42435b',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingLeft: 10,
        fontFamily: 'FontTwo',
        width: 100,
        height: 50
    },
    Input2: {
        fontSize: 15,
        borderColor: '#42435b',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingLeft: 10,
        fontFamily: 'FontTwo',
        height: 50
    },
    button: {
        backgroundColor: theme.colors.secondary,
        fontFamily: 'FontThree',
        borderRadius: 20,
        marginTop: 40,
        width: 150,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'

    },
    screen: {
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: "black",
        fontFamily: 'FontThree',
        fontSize: 20,
        width: 200,
        borderRadius: 20,
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
