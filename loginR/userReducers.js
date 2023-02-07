/* eslint-disable prettier/prettier */
import React from 'react';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from './userConstants';

export const userLoginReducer = (state = {userInfo: {}}, action) => {
  console.log(state);
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {loading: true};
    case USER_LOGIN_SUCCESS:
      return {loading: false, userInfo: action.payload};
    case USER_LOGIN_FAIL:
      return {loading: false, error: action.payload};
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
