/* eslint-disable prettier/prettier */
import axios from 'axios';
import {GET_CART, ADD_TO_CART, REMOVE_FROM_CART} from './cartConstants';

export const getCartss = userEmail => {
  return async dispatch => {
    try {
      //console.log(userEmail);
      const res = await axios.get(
        `https://wideyellowpencil67.conveyor.cloud/api/Order/GetAllProductsInCart/${userEmail}`,
      );
      if (res.data) {
        dispatch({
          type: GET_CART,
          payload: res.data,
        });
        // console.log('action work');
        // console.log(res.data);
      } else {
        console.log('Unable to fetch cart');
      }
    } catch (error) {
      console.error(error);
    }
  };
};
export const addtoCartss = (productId, userEmail, quantity) => {
  return async dispatch => {
    try {
      //console.log(userEmail);
      const res = await axios
        .post(
          `https://wideyellowpencil67.conveyor.cloud/api/Order/AddToCart/${productId}/${userEmail}/${quantity}`,
        )
        .then(function (response) {
          console.log(response);
          return response;
        })
        .catch(function (error) {
          console.log(error);
        });
      if (res.data) {
        dispatch({
          type: ADD_TO_CART,
          payload: res.data.message,
        });
        // console.log('action work');
        //console.log(res.data.message);
      } else {
        console.log('Unable to add to cart');
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const removeFromCart = (cartId, userEmail) => {
  return async dispatch => {
    try {
      const res = await axios
        .delete(
          `https://wideyellowpencil67.conveyor.cloud/api/Order/DeleteFromCart/${cartId}/${userEmail}`,
        )
        .then(function (response) {
          console.log(response);
          return response;
        })
        .catch(function (error) {
          console.log(error);
        });
      if (res.data) {
        dispatch({
          type: REMOVE_FROM_CART,
          payload: cartId,
        });
        console.log('action REMOVE_FROM_CART work');
        console.log(res.data.message);
      } else {
        console.log('Unable to DELETE ITEM from cart');
      }
    } catch (error) {
      console.error(error);
    }
  };
};
