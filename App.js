import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductsList} from './screens/ProductList.js';
import {ProductDetails} from './screens/ProductDetails.js';
import {LoginIcon} from './components/LoginIcon.js';
import {Login} from './screens/Login.js';
import {SignUp} from './screens/SignUp.js';
import {Cart} from './screens/Cart.js';
import {ContinueIcon} from './components/ContinueIcon.js';
import Tabs from './Tabs.js';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default App;
