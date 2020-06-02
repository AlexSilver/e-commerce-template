import CartActionTypes from './cart.types';
import { updateCartItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state, action) => {
  if (state === undefined) {
    return { ...INITIAL_STATE };
  }

  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: updateCartItem(state.cartItems, action.payload, 1),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: updateCartItem(state.cartItems, action.payload, 0),
      };
    case CartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: updateCartItem(state.cartItems, action.payload, -1),
      };
    default:
      return state;
  }
};

export default cartReducer;
