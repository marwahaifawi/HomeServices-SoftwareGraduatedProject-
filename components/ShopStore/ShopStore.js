import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import SearchBar from '../SearchBar';
import Products from './Products';
import ProductsView from '../listView/ProductsView';
export default function ShopStore({ navigation }) {
  const [ProductsData, setProducts] = Products;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
      </View>
      <View style={styles.body}>
        <ScrollView>
          <ProductsView OnPress={() => navigation.navigate('productDetails', {productsId:Products})} data={Products} />
        </ScrollView>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 10
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 7
  }
})
