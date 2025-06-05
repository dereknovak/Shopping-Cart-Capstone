import type { FormInput } from '../types';

export const convertInputToProduct = (input: FormInput) => {
  return {
    title: input.title,
    price: Number(input.price),
    quantity: Number(input.quantity),
  };
};
