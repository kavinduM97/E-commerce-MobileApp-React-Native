/* eslint-disable prettier/prettier */
import {GET_CART, ADD_TO_CART, REMOVE_FROM_CART} from './cartConstants';
const initialData = {cartItems: [], addItemsres: []};
function cartReducer(state = initialData, action) {
  console.log('cartreducer state');
  console.log(action.payload);
  console.log('cartreducer state');

  switch (action.type) {
    case GET_CART: {
      const data = state;
      data.cartItems = action.payload;
      console.log('cartItems' + data);
      return {...data};
    }
    case ADD_TO_CART: {
      const data = state;
      data.addItemsres = action.payload;
      console.log('addItemsres' + data);
      return {...data};
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItems => cartItems.cartId !== action.payload.cartId,
        ),
      };

    default:
      return state;
  }
}
export default cartReducer;
