import type { CartType, FormInput } from '../types';

export const convertInputToProduct = (input: FormInput) => {
  return {
    title: input.title,
    price: Number(input.price),
    quantity: Number(input.quantity),
  };
};

export const isItemInCart = (cart: CartType, productId: string) => {
  return cart.find((item) => item.productId === productId);
};
