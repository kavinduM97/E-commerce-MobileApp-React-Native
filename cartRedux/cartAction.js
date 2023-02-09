/* eslint-disable prettier/prettier */
import axios from 'axios';
import {GET_CART} from './cartConstants';

export const getCartss = userEmail => {
  return async dispatch => {
    try {
      console.log(userEmail);
      const res = await axios.get(
        `https://funyellowtrail36.conveyor.cloud/api/Order/GetAllProductsInCart/${userEmail}`,
      );
      if (res.data) {
        console.log('ythis is cart items in action' + res);
        dispatch({
          type: GET_CART,
          payload: res.data,
        });
        console.log('action work');
        console.log(res.data);
        // console.log(res.data.json());
        // AsyncStorage.setItem('products', JSON.stringify(res.data.json()));
      } else {
        console.log('Unable to fetch cart');
      }
    } catch (error) {
      console.error(error);
    }
  };
};
