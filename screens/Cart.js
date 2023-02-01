/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {getCartItems} from '../services/CartService';

import {CartItem} from '../components/CartItem';

export function Cart({navigation}) {
  function renderProduct({item: cart}) {
    return <CartItem {...cart} navigation={navigation} />;
  }

  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    setDataSet(getCartItems());
  }, []);

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={dataSet}
      renderItem={renderProduct}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
    width: '80%',
    paddingVertical: 10,
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
    backgroundColor: '#E5E0FF',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
