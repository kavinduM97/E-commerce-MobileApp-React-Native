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
import SplashScreen from './screens/SplashScreen.js';
import {ContinueIcon} from './components/ContinueIcon.js';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="Products"
          component={ProductsList}
          options={({navigation}) => ({
            title: 'Products',
            headerRight: () => <LoginIcon navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={({navigation}) => ({
            title: 'ProductDetails',
            headerRight: () => <LoginIcon navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({navigation}) => ({
            title: 'Products',
            headerRight: () => <ContinueIcon navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({navigation}) => ({
            title: 'Products',
            headerRight: () => <ContinueIcon navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={({navigation}) => ({
            title: 'Products',
            headerRight: () => <ContinueIcon navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
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
