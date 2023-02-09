/* eslint-disable prettier/prettier */
import axios from 'axios';
import {GET_CART, ADD_TO_CART} from './cartConstants';

export const getCartss = userEmail => {
  return async dispatch => {
    try {
      //console.log(userEmail);
      const res = await axios.get(
        `https://earlybluelamp36.conveyor.cloud/api/Order/GetAllProductsInCart/${userEmail}`,
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
          `https://earlybluelamp36.conveyor.cloud/api/Order/AddToCart/${productId}/${userEmail}/${quantity}`,
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
        console.log(res.data.message);
      } else {
        console.log('Unable to add to cart');
      }
    } catch (error) {
      console.error(error);
    }
  };
};
