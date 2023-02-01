/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {ContinueIcon} from '../components/ContinueIcon';
import {LoginIcon} from '../components/LoginIcon';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Products');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logostoreLK.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Store.LK</Text>
      <ActivityIndicator size="large" />
      <View style={styles.iconContainer}>
        <LoginIcon navigation={navigation} />
      </View>
      <ContinueIcon navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E0FF',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
});

export default SplashScreen;
