/* eslint-disable prettier/prettier */
import axios from 'axios';

import {
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  PLACE_ORDER_BY_CART,
} from './cartConstants';

export const getCartss = userEmail => {
  return async dispatch => {
    try {
      //console.log(userEmail);
      const res = await axios.get(
        `https://greatbrasshouse8.conveyor.cloud/api/Order/GetAllProductsInCart/${userEmail}`,
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
          `https://greatbrasshouse8.conveyor.cloud/api/Order/AddToCart/${productId}/${userEmail}/${quantity}`,
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
          `https://greatbrasshouse8.conveyor.cloud/api/Order/DeleteFromCart/${cartId}/${userEmail}`,
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

export const placeOrder = (userEmail, cartProductList) => {
  return async dispatch => {
    try {
      //console.log(userEmail);
      const res = await axios.post(
        `https://greatbrasshouse8.conveyor.cloud/api/Order/placeorderbyCart/${userEmail}`,
        cartProductList,
      );
      //console.log(res);
      if (res.data.state) {
        dispatch({
          type: PLACE_ORDER_BY_CART,
          payload: res.data.transid,
        });
        console.log('action work IN PLACE ORDER');
        console.log(res.data);
        console.log(res.data.state);
        console.log(res.data.transid);
        alert('Order Placed sucessfully');
      } else {
        console.log('Unable place orderrr');
      }
    } catch (error) {
      console.error(error);
    }
  };
};
