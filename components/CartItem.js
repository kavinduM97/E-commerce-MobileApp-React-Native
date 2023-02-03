/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors, Typography} from 'react-native/Libraries/NewAppScreen';

export function CartItem({
  name,
  price,
  image,
  quantity,
  totalPrice,
  navigation,
  setTotal,
  total,
  productCount,
  setProductCount,
  setDataSet,
}) {
  const onDelete = () => {};

  return (
    <View style={styles.cartLine}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>x {quantity}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${totalPrice}</Text>
        <TouchableOpacity onPress={onDelete} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 8,
    borderRadius: 8,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 16,
    color: Colors.gray,
    marginRight: 8,
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
