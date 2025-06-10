import { useEffect, useReducer, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import {
  addProductToCart,
  checkoutCart,
  createProduct,
  deleteProduct,
  getCart,
  getProducts,
  updateProduct,
} from './services/products';
import type { FormInput, ProductIdObject, SortType } from './types';
import { convertInputToProduct } from './utilities/utilities';
import productsReducer, { ProductsAction } from './reducers/productsReducer';
import cartReducer, { CartAction } from './reducers/cartReducer';

const App = () => {
  const [products, dispatchProducts] = useReducer(productsReducer, []);
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [productSortType, setProductsSortType] = useState<SortType>('newest');

  useEffect(() => {
    (async () => {
      const data = await getCart();
      console.log(data[0]);
      dispatchCart(CartAction.FetchCart(data));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      dispatchProducts(ProductsAction.FetchProducts(data, productSortType));
    })();
  }, [products.length, productSortType]);

  const handleAddFormSubmission = async (newProduct: FormInput) => {
    try {
      const cleanData = convertInputToProduct(newProduct);
      const data = await createProduct(cleanData);

      dispatchProducts(ProductsAction.CreateProduct(data, productSortType));
    } catch (e) {
      console.log(e);
    }
  };

  const handleProductUpdate = async (
    productId: string,
    updatedProduct: FormInput
  ) => {
    try {
      const cleanData = convertInputToProduct(updatedProduct);
      const data = await updateProduct(productId, cleanData);

      dispatchProducts(ProductsAction.UpdateProduct(data, productId));
    } catch (e) {
      console.log(e);
    }
  };

  const handleProductDelete = async (productId: string) => {
    try {
      await deleteProduct(productId);
      dispatchProducts(ProductsAction.DeleteProduct(productId));
    } catch (e) {
      console.log(e);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkoutCart();
      dispatchCart(CartAction.CheckoutCart());
    } catch (e) {}
  };

  const handleAddProductToCart = async (addedProduct: ProductIdObject) => {
    try {
      const { product, item } = await addProductToCart(addedProduct);
      const productId = addedProduct.productId;

      dispatchCart(CartAction.AddToCart(item, productId));
      dispatchProducts(ProductsAction.UpdateProduct(product, productId));
    } catch (e) {
      console.log(e);
    }
  };

  const handleProductSort = (type: SortType) => {
    setProductsSortType(type);
  };

  const isSortTypeSelected = (sortType: SortType) => {
    return sortType === productSortType;
  };

  return (
    <div id="app">
      <Header cart={cart} onCheckout={handleCheckout} />
      <Main
        products={products}
        onSubmit={handleAddFormSubmission}
        onUpdate={handleProductUpdate}
        onDelete={handleProductDelete}
        onAddToCart={handleAddProductToCart}
        onProductSort={handleProductSort}
        isSortTypeSelected={isSortTypeSelected}
      />
    </div>
  );
};

export default App;
