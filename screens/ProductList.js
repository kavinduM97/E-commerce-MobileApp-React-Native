/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import {getProducts} from '../services/ProductService';
import {Product} from '../components/Product';

export function ProductsList({navigation}) {
  function renderProduct({item: product}) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate('ProductDetails', {productId: product.id});
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = text => {
    setSearchTerm(text);
  };
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <View style={{flex: 1}}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a product"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>
      {searchTerm === '' ? (
        <FlatList
          style={styles.productsList}
          contentContainerStyle={styles.productsListContainer}
          keyExtractor={item => item.id.toString()}
          data={products}
          renderItem={renderProduct}
        />
      ) : (
        <FlatList
          style={styles.productsList}
          contentContainerStyle={styles.productsListContainer}
          keyExtractor={item => item.id.toString()}
          data={filteredProducts}
          renderItem={renderProduct}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#E5E0FF',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  searchInput: {
    flex: 1,
    height: 40,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
