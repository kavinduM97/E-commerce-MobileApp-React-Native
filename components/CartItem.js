/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {Colors, Typography} from 'react-native/Libraries/NewAppScreen';

export function CartItem({
  name,
  price,
  image,
  totalPrice,
  navigation,
  quantity,
  selectedItems,
  setSelectedItems,
}) {
  const onDelete = () => {};

  const updateSelectedItems = (name, price, quantity, checked) => {
    if (checked) {
      setSelectedItems({...selectedItems, [name]: {price, quantity}});
    } else {
      const newSelectedItems = {...selectedItems};
      delete newSelectedItems[name];
      setSelectedItems(newSelectedItems);
    }
  };

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
        <View>
          <Text style={styles.price}>${totalPrice}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <CheckBox
          value={name in selectedItems}
          onValueChange={checked =>
            updateSelectedItems(name, price, quantity, checked)
          }
          tintColors={{true: Colors.primary, false: '#c1c1c1'}}
          style={{width: 20, height: 20}}
        />

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
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    alignSelf: 'flex-end',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  closeButton: {
    backgroundColor: 'red',

    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 5,
    marginRight: -10,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
