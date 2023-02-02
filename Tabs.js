/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ProductsList} from './screens/ProductList.js';
import {Login} from './screens/Login.js';
import {SignUp} from './screens/SignUp.js';
import {Cart} from './screens/Cart.js';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Products"
        component={ProductsList}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('./assets/tab/home.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  width: 30,
                  height: 30,
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 11,
                  textAlign: 'center',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('./assets/tab/user.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  width: 30,
                  height: 30,
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 11,
                  textAlign: 'center',
                }}>
                User
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('./assets/tab/cart.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{
                  width: 30,
                  height: 30,
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 11,
                  textAlign: 'center',
                }}>
                Cart
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
  },
});

export default Tabs;
