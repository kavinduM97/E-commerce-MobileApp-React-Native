/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import {Product} from '../components/Product';
import {getProductsss} from '../ProductsRedux/productsAction';
import axios from 'axios';

export function ProductsList({navigation}) {
  const userLogin = useSelector(state => state.userLogin);

  const {userInfo} = userLogin;
  const Email = userInfo ? userInfo.Email : null;

  const myproductr = useSelector(state => state.myproductr);
  //console.log('mypppppp');
  //console.log(JSON.parse(myproductr));

  //const {products} = myproductr;

  console.log('hhhhhhj');
  console.log(myproductr.products);
  const dispatch = useDispatch();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      dispatch(getProductsss());
      setDataFetched(true);
    }
  }, [dataFetched, dispatch]);

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

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = text => {
    setSearchTerm(text);
  };
  // const filteredProducts = products
  //   ? products.filter(product =>
  //       product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  //     )
  //   : [];

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
          data={myproductr.products}
          renderItem={renderProduct}
        />
      ) : (
        <FlatList
          style={styles.productsList}
          contentContainerStyle={styles.productsListContainer}
          keyExtractor={item => item.productId.toString()}
          data={myproductr.products}
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
