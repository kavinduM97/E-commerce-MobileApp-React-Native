/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import {getProducts} from '../services/ProductService';
import {Product} from '../components/Product';
import axios from 'axios';

export function ProductsList({navigation}) {
  const userLogin = useSelector(state => state.userLogin);

  const {userInfo} = userLogin;
  const Email = userInfo ? userInfo.Email : null;
  function renderProduct({item: product}) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate('ProductDetails', {productId: product.productId});
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://rightashgrape66.conveyor.cloud/api/Product')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log('Error Message:', err.message);
        console.log('Request Details:', err.config);
      });
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
          keyExtractor={item => item.productId.toString()}
          data={products}
          renderItem={renderProduct}
        />
      ) : (
        <FlatList
          style={styles.productsList}
          contentContainerStyle={styles.productsListContainer}
          keyExtractor={item => item.productId.toString()}
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
