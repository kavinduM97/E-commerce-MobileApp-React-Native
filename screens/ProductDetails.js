/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {AddtoCart} from '../components/AddtoCart';

import {getProduct} from '../services/ProductService';

export function ProductDetails({route, navigation}) {
  const Id = route.params;

  // const [product, setProduct] = useState({});
  const myproductr = useSelector(state => state.myproductr);
  const [filteredProducts] = myproductr.products
    ? myproductr.products.filter(product => product.productId === Id.productId)
    : [];

  // useEffect(() => {
  //   axios
  //     .get(`https://funyellowtrail36.conveyor.cloud/api/Product/${productId}`)
  //     .then(res => {
  //       let temp = {};
  //       temp = res.data;
  //       setProduct({...temp});
  //     })
  //     .catch(err => {
  //       alert(err.message);
  //     });
  // });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={filteredProducts.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{filteredProducts.name}</Text>
          <Text style={styles.price}>$ {filteredProducts.price}</Text>
          <Text style={styles.description}>{filteredProducts.description}</Text>

          {/* <Button
            onPress={() => {
              navigation.navigate('Cart');
            }}
            title="Add To Cart"
          /> */}
          <AddtoCart productId={Id.productId} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '60%',

    aspectRatio: 1,
  },
  infoContainer: {
    padding: 16,
    backgroundColor: '#E5E0FF',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1F8A70',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});
