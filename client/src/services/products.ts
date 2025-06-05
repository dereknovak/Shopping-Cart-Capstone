import axios from 'axios';
import type { NewProduct, UpdatedProduct } from '../types';

const BASE_URL = '/api';

// Products

export const getProducts = async () => {
  const { data } = await axios.get(`${BASE_URL}/products`);
  return data;
};

export const createProduct = async (newProduct: NewProduct) => {
  const { data } = await axios.post(`${BASE_URL}/products`, newProduct);
  return data;
};

export const updateProduct = async (
  productId: string,
  updatedProduct: UpdatedProduct
) => {
  const { data } = await axios.put(
    `${BASE_URL}/products/${productId}`,
    updatedProduct
  );
  return data;
};

export const deleteProduct = async (productId: string) => {
  const { data } = await axios.delete(`${BASE_URL}/products/${productId}`);
  return data;
};

// Cart

export const getCart = async () => {
  const { data } = await axios.get(`${BASE_URL}/cart`);
  return data;
};

export const checkoutCart = async () => {
  const { data } = await axios.post(`${BASE_URL}/checkout`);
  return data;
};

export const addProductToCart = async (productWithId: {
  productId: string;
}) => {
  const { data } = await axios.post(`${BASE_URL}/add-to-cart`, productWithId);
  return data;
};
