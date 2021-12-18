import React, { useEffect, useState, useContext } from 'react';
import { theme } from '../../core/theme';
import {
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function WorkerProfile({ route }) {
  const worker = route.params;
  const [visible, setVisible] = useState(false);
  console.log(visible);
  const ratingCompleted = (rating) => {
    return console.log("Rating is: " + rating)
  }
  return (

    <>
      <View style={styles.detaileCart}>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center' }}>
          <Image style={{ marginTop: 10, width: 50, height: 50 }} source={require('../../assets/justlogo.png')} />
          <Text style={{
            width: '50%',
            marginTop: 30,
            flexDirection: 'row',
            fontSize: 20,
            fontFamily: 'FontThree',
            color: theme.colors.primary
          }}>HOME SERVICES</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.infoContainer}>
            <Image style={styles.image} />
            <Text style={styles.name}>{worker.Name}</Text>
            <View style={{ backgroundColor: theme.colors.secondary, height: 50, width: 100, justifyContent: 'center', borderTopRightRadius: 10 }}>
              <Text style={styles.price}>{worker.servicesoffered}</Text>
            </View>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity onPress={() => setVisible(true)}>
                <View style={styles.addToCartButton}>
                  <Text style={styles.addToCart}>
                    Rate
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {visible ? (
              <View>
                <AirbnbRating
                  count={5}
                  reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
                  defaultRating={0}
                  size={15} />
              </View>) : null}
          </View>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity>
              <View style={styles.addToCartButton}>
                <Text style={styles.addToCart}>
                  Send Request
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    </>
  );
}
const styles = StyleSheet.create({
  detaileCart: {
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginTop: 20
  },
  infoContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopWidth: 1,
    paddingBottom: 10,
    width: '95%',
    marginTop: 8,
    height: '100%',
    alignSelf: 'center',
    borderColor: '#787877',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  name: {
    fontSize: 25,
    fontFamily: 'FontThree',
    marginBottom: 10,
    alignSelf: 'center',
    color: '#787878',
    padding: 16,
  },
  price: {
    fontSize: 18,
    fontFamily: 'FontThree',
    color: 'white',
    alignSelf: 'center'
  },
  description: {
    fontSize: 16,
    padding: 16,
    color: '#787878',

  },
  ButtonContainer: {
    height: 40,
    justifyContent: 'center',
    borderRadius: 16,
    width: '92%',
    backgroundColor: theme.colors.primary,
    marginTop: 20,
    alignSelf: 'center'
  },
  addToCart: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'FontThree',
    color: theme.colors.surface,
    paddingLeft: 10

  },
  addToCartButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
