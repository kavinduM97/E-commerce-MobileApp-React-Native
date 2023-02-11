/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {placeOrder} from '../cartRedux/cartAction';
export function Checkout({
  navigation,
  total,
  placed,
  setplaced,
  setSelectedItems,
  setTotal,
  setTotalQuantity,
  selectedCartIds,
  setSelectedCartIds,
}) {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);

  const {userInfo} = userLogin;
  const Email = userInfo ? userInfo.Email : null;
  let userEmail = Email;
  const PlaceanOrder = () => {
    dispatch(placeOrder(userEmail, selectedCartIds));

    //setplaced(!placed);
    setTotal(0);
    setTotalQuantity(0);
    setSelectedCartIds({});
    setSelectedItems({});
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkoutContainer}>
        <Text style={styles.totalAmount}>Total amount: {total}</Text>
        <TouchableOpacity onPress={PlaceanOrder} style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    overflow: 'scroll',
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
    marginBottom: 8,
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
