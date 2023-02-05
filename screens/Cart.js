/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {getCartItems} from '../services/CartService';

import {CartItem} from '../components/CartItem';

export function Cart({navigation}) {
  function renderProduct({item: cart}) {
    return (
      <CartItem
        {...cart}
        navigation={navigation}
        totalAmount={total}
        setTotalAmount={setTotal}
        selectedItems={selectedItems}
        totalQuantity={totalQuantity}
        setTotalQuantity={setTotalQuantity}
        setSelectedItems={setSelectedItems}
      />
    );
  }

  const [dataSet, setDataSet] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    const newDataSet = getCartItems();
    setDataSet(newDataSet);
  }, []);
  useEffect(() => {
    let newTotal = 0;
    let newTotalQuantity = 0;
    Object.values(selectedItems).forEach(({price, quantity}) => {
      newTotal += price * quantity;
      newTotalQuantity += quantity;
    });
    setTotal(newTotal);
    setTotalQuantity(newTotalQuantity);
  }, [selectedItems]);

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
        <Text style={styles.totalAmount}>Total amount: {total}</Text>
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
