/* eslint-disable prettier/prettier */
import {
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  PLACE_ORDER_BY_CART,
} from './cartConstants';
const initialData = {cartItems: [], addItemsres: [], placeOrder: 0};
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
      console.log('addItemsres');
      return {...data};
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItems => cartItems.cartId !== action.payload.cartId,
        ),
      };
    case PLACE_ORDER_BY_CART: {
      const data = state;
      data.placeOrder = action.payload;
      console.log('placeOrder');
      console.log(data.placeOrder);
      console.log('placeOrder');
      return {...data};
    }

    default:
      return state;
  }
}
export default cartReducer;
