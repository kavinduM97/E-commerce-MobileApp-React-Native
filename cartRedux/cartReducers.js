/* eslint-disable prettier/prettier */
import {GET_CART} from './cartConstants';
const initialData = {cartItems: []};
function cartReducer(state = initialData, action) {
  console.log('cartreducer state');
  console.log('cartreducer state' + action.payload);
  console.log('cartreducer state');

  switch (action.type) {
    case GET_CART: {
      const data = state;
      data.cartItems = action.payload;
      console.log('cartItems' + data);
      return {...data};
    }

    default:
      return state;
  }
}
export default cartReducer;
