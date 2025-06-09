import type { CartItemType, CartType } from '../types';
import { isItemInCart } from '../utilities/utilities';

interface FetchCartAction {
  type: 'FETCH_CART';
  payload: CartType;
}

interface CheckoutCartAction {
  type: 'CHECKOUT_CART';
}

interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: CartItemType;
  productId: string;
}

type CartAction = FetchCartAction | CheckoutCartAction | AddToCartAction;

export const CartAction = {
  FetchCart: (payload: CartType): FetchCartAction => ({
    type: 'FETCH_CART',
    payload,
  }),
  CheckoutCart: (): CheckoutCartAction => ({ type: 'CHECKOUT_CART' }),
  AddToCart: (payload: CartItemType, productId: string): AddToCartAction => ({
    type: 'ADD_TO_CART',
    payload,
    productId,
  }),
};

const cartReducer = (cart: CartType, action: CartAction) => {
  switch (action.type) {
    case 'FETCH_CART': {
      return action.payload;
    }
    case 'CHECKOUT_CART': {
      return [];
    }
    case 'ADD_TO_CART': {
      if (isItemInCart(cart, action.productId)) {
        return cart.map((item: CartItemType) =>
          item.productId === action.productId ? action.payload : item
        );
      } else {
        return [...cart, action.payload];
      }
    }
  }
};

export default cartReducer;
