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

  itemsList: {
    backgroundColor: '#eeeeee',
  },

  itemsListContainer: {
    backgroundColor: '#E5E0FF',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
