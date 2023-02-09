/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Button, View, Text, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addtoCartss} from '../cartRedux/cartAction';

export function AddtoCart({productId, stock, navigation}) {
  const [quantity, setQuantity] = useState(0);
  const [clicked, setClicked] = useState(false);
  // const addmyCartItemss = useSelector(state => state.mycartt);
  const userLogin = useSelector(state => state.userLogin);
  const dispatch = useDispatch();
  const {userInfo} = userLogin;
  const Email = userInfo ? userInfo.Email : null;
  let userEmail = Email;

  // console.log(addmyCartItemss.addItemsres);
  // var message = addmyCartItemss.addItemsres.toString();
  const increaseOrder = () => {
    setQuantity(quantity + 1);
  };

  const decreaseOrder = () => {
    setQuantity(quantity - 1);
  };

  const AddToCart = () => {
    dispatch(addtoCartss(productId, userEmail, quantity));
    setClicked(!clicked);

    navigation.navigate('Cart', clicked);
    alert('Item add to cart succesfully');
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
            AddToCart();
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
