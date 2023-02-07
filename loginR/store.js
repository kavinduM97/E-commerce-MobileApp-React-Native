/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer} from './userReducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
  userLogin: userLoginReducer,
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

const initialState = {
  userLogin: {userInfo: getUserInfoFromStorage()},
};

console.log(initialState);
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
