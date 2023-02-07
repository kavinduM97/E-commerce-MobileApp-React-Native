/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../loginR/userAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Profile(navigation) {
  const userLogin = useSelector(state => state.userLogin);

  const {userInfo} = userLogin;

  const dispatch = useDispatch();
  const submit = async () => {
    dispatch(logout);
    await AsyncStorage.clear();
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          submit();
        }}>
        Log Out
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#03C988',
    height: 42,
    width: 150,
    padding: 12,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
