/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../loginR/userAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Profile({navigation}) {
  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;
  const Email = userInfo ? userInfo.Email : null;

  const dispatch = useDispatch();
  const submit = async () => {
    await AsyncStorage.removeItem('userInfo');
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('../assets/tab/user.png')}
      />
      <Text style={styles.header}>Hi {Email}!</Text>
      <TouchableOpacity style={styles.logoutBtn} onPress={submit}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  logoutBtn: {
    backgroundColor: '#03C988',
    height: 42,
    width: 150,
    padding: 12,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
