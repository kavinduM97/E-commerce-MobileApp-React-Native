/* eslint-disable prettier/prettier */
import axios from 'axios';
import {GET_PRODUCTS} from './productsConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getProductsss = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        'https://funyellowtrail36.conveyor.cloud/api/Product',
      );
      if (res.data) {
        console.log(res.data);
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
        // console.log('asyncc');
        // console.log(res.data.json());
        // AsyncStorage.setItem('products', JSON.stringify(res.data.json()));
      } else {
        console.log('Unable to fetch');
      }
    } catch (error) {
      console.error(error);
    }
  };
};
