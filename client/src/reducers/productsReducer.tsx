import type { Products, ProductType, SortType } from '../types';
import { sortProducts } from '../utilities/utilities';

interface FetchProductsAction {
  type: 'FETCH_PRODUCTS';
  payload: Products;
  sortType: SortType;
}

interface CreateProductAction {
  type: 'CREATE_PRODUCT';
  payload: ProductType;
  sortType: SortType;
}

interface UpdateProductAction {
  type: 'UPDATE_PRODUCT';
  payload: ProductType;
  productId: string;
}

interface DeleteProductAction {
  type: 'DELETE_PRODUCT';
  productId: string;
}

type ProductsAction =
  | FetchProductsAction
  | CreateProductAction
  | UpdateProductAction
  | DeleteProductAction;

export const ProductsAction = {
  FetchProducts: (
    payload: Products,
    sortType: SortType
  ): FetchProductsAction => ({
    type: 'FETCH_PRODUCTS',
    payload,
    sortType,
  }),
  CreateProduct: (
    payload: ProductType,
    sortType: SortType
  ): CreateProductAction => ({
    type: 'CREATE_PRODUCT',
    payload,
    sortType,
  }),
  UpdateProduct: (
    payload: ProductType,
    productId: string
  ): UpdateProductAction => ({ type: 'UPDATE_PRODUCT', payload, productId }),
  DeleteProduct: (productId: string): DeleteProductAction => ({
    type: 'DELETE_PRODUCT',
    productId,
  }),
};

const productsReducer = (products: Products, action: ProductsAction) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS': {
      return sortProducts(action.payload, action.sortType);
    }
    case 'CREATE_PRODUCT': {
      const newProducts = [...products, action.payload];
      return sortProducts(newProducts, action.sortType);
    }
    case 'UPDATE_PRODUCT': {
      return products.map((product) =>
        product._id === action.productId ? action.payload : product
      );
    }
    case 'DELETE_PRODUCT': {
      return products.filter((product) => product._id !== action.productId);
    }
  }
};

export default productsReducer;
