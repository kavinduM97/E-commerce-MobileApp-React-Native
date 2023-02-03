/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
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
  const {productId} = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(productId));
  }, [productId]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={product.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>

          {/* <Button
            onPress={() => {
              navigation.navigate('Cart');
            }}
            title="Add To Cart"
          /> */}
          <AddtoCart productId={productId} navigation={navigation} />
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
    width: '100%',
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
