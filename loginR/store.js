/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer} from './userReducers';
import allproductsReducer from '../ProductsRedux/productsReducers';
import cartReducer from '../cartRedux/cartReducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
  userLogin: userLoginReducer,
  myproductr: allproductsReducer,
  mycartt: cartReducer,
});

const getUserInfoFromStorage = async () => {
  try {
    const userInfo = await AsyncStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const getProductsFromStorage = async () => {
  try {
    const products = await AsyncStorage.getItem('products');
    console.log('consloe...');
    console.log(JSON.parse(products));
    return JSON.parse(products);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const initialState = {
  userLogin: {userInfo: getUserInfoFromStorage()},
  //myproductr: {products: getProductsFromStorage()},
};

console.log(initialState);
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
