import type {
  CartType,
  Currency,
  FormInput,
  Products,
  SortType,
} from '../types';

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

const alphaSort = (a: string, b: string) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export const sortProducts = (products: Products, sortType: SortType) => {
  switch (sortType) {
    case 'newest': {
      return products;
    }
    case 'title': {
      return products.sort((a, b) => alphaSort(a.title, b.title));
    }
    case 'price': {
      return products.sort((a, b) => a.price - b.price);
    }
    case 'quantity': {
      return products.sort((a, b) => a.quantity - b.quantity);
    }
  }
};

export const capitalize = (text: string) => {
  return text[0].toUpperCase() + text.slice(1);
};

export const getCurrencySymbol = (currency: Currency) => {
  const symbols = {
    USD: '$',
    EUR: '€',
    CAD: '$',
    JPY: '¥',
  };

  return symbols[currency];
};
