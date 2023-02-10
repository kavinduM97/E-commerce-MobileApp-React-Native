/* eslint-disable prettier/prettier */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  RESET_USER_LOGIN,
} from './userConstants';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  console.log(email, password);

  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const response = await axios
      .post('https://wideyellowpencil67.conveyor.cloud/api/User/login', {
        email,
        password,
      })
      .then(response => {
        return response.data.detail;
      });

    alert('User logged successfully');

    const userData = {Email: response.email, Token: response.token};

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userData,
    });

    AsyncStorage.setItem('userInfo', JSON.stringify(userData));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    alert('login failed');
  }
};

export const logout = () => async dispatch => {
  dispatch({type: RESET_USER_LOGIN, payload: {userInfo: null}});
  AsyncStorage.removeItem('userInfo');
};
