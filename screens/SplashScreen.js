/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import {ContinueIcon} from '../components/ContinueIcon';
import {LoginIcon} from '../components/LoginIcon';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logostoreLK.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Store.LK</Text>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2E2E2E"/>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
      <View style={styles.iconContainer}>
        <LoginIcon navigation={navigation} />
        <ContinueIcon navigation={navigation} />
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

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
  loadingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#2E2E2E',
    marginTop: 10,
  },
  iconContainer: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default SplashScreen;
