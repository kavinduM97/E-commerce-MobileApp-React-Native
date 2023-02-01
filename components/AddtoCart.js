/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';

export function AddtoCart({productId, stock, navigation}) {
  const [quantity, setQuantity] = useState(0);

  const increaseOrder = () => {
    setQuantity(quantity + 1);
  };

  const decreaseOrder = () => {
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    // interact with backend
  };

  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        {quantity <= 0 ? (
          <View style={styles.buttonContainer}>
            <Button disabled title="-" />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Button onPress={decreaseOrder} title="-" />
          </View>
        )}
        <Text style={styles.quantityText}>{quantity} in to cart</Text>
        {quantity >= stock ? (
          <View style={styles.buttonContainer}>
            <Button disabled title="+" />
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Button onPress={increaseOrder} title="+" />
          </View>
        )}
      </View>
      <View style={styles.addButtonContainer}>
        <Button
          onPress={() => {
            navigation.navigate('Cart');
          }}
          title="Add To Cart"
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 20,
  },
  addButtonContainer: {
    padding: 16,
  },
};
