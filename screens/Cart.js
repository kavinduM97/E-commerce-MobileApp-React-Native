/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {getCartItems} from '../services/CartService';

import {CartItem} from '../components/CartItem';

export function Cart({navigation}) {
  function renderProduct({item: cart}) {
    return <CartItem {...cart} navigation={navigation} />;
  }

  const [dataSet, setDataSet] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  function calculateTotalAmount(data) {
    return data.reduce((sum, item) => sum + item.price, 0);
  }

  useEffect(() => {
    const newDataSet = getCartItems();
    setDataSet(newDataSet);
    setTotalAmount(calculateTotalAmount(newDataSet));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={dataSet}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.checkoutContainer}>
        <Text style={styles.totalAmount}>Total amount: {totalAmount}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
  },

  itemsList: {
    backgroundColor: '#eeeeee',
  },

  itemsListContainer: {
    backgroundColor: '#E5E0FF',
    paddingVertical: 8,
    marginHorizontal: 8,
  },

  checkoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    marginHorizontal: 8,
    marginTop: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  totalAmount: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  checkoutButton: {
    backgroundColor: '#28a745',
    padding: 8,
    borderRadius: 4,
  },

  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
