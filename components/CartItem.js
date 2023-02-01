/* eslint-disable prettier/prettier */
import {React, useState} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Input,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export function CartItem({
  name,
  price,
  image,
  quantity,
  totalPrice,
  navigation,
}) {
  const onDelete = () => {};

  const handleChange = () => {};
  return (
    <View style={styles.cartLine}>
      <Image style={styles.image} source={image} />
      <Text style={styles.lineLeft}>
        {name} {'\n'} x {quantity}{' '}
        <Text style={styles.productTotal}>${totalPrice}</Text>
      </Text>
      <View style={styles.leftContainer}>
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
    width: '80%',
    paddingVertical: 10,
  },
  leftContainer: {
    position: 'absolute',
    right: -50,
    top: 10,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '25%',
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  productTotal: {
    fontWeight: 'bold',
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333',
  },
  lineRight: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
