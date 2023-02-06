/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ProductsList} from './screens/ProductList.js';
import {Login} from './screens/Login.js';
import {SignUp} from './screens/SignUp.js';
import {Cart} from './screens/Cart.js';
import {ProductDetails} from './screens/ProductDetails.js';
import SplashScreen from './screens/SplashScreen.js';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <SafeAreaView style={{flex: 1, paddingBottom: 100}}>
      <Tab.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: -90,
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
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
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
            tabBarStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
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
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
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

        <Tab.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
        <Tab.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
  },
});

export default Tabs;
