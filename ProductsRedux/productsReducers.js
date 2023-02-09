/* eslint-disable prettier/prettier */
import {GET_PRODUCTS} from './productsConstants';
const initialData = {products: []};
function allproductsReducer(state = initialData, action) {
  console.log('productreducer state');
  console.log('productreducer state' + action.payload);

  switch (action.type) {
    case GET_PRODUCTS: {
      const data = state;
      data.products = action.payload;
      console.log('klklkl' + data);
      return {...data};
    }

    default:
      return state;
  }
}
export default allproductsReducer;
