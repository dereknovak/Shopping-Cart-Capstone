import { useEffect, useState } from 'react';
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
import type { CartType, FormInput, ProductIdObject, Products } from './types';
import { convertInputToProduct, isItemInCart } from './utilities/utilities';

const App = () => {
  const [products, setProducts] = useState<Products>([]);
  const [cart, setCart] = useState<CartType>([]);

  useEffect(() => {
    (async () => {
      const data = await getCart();
      setCart(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  const handleAddFormSubmission = async (newProduct: FormInput) => {
    try {
      const cleanData = convertInputToProduct(newProduct);
      const data = await createProduct(cleanData);

      setProducts((prev) => [...prev, data]);
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

      setProducts((prev) =>
        prev.map((prod) => (prod._id === productId ? data : prod))
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleProductDelete = async (productId: string) => {
    try {
      await deleteProduct(productId);
      setProducts((prev) => prev.filter((prod) => prod._id !== productId));
    } catch (e) {
      console.log(e);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkoutCart();
      setCart([]);
    } catch (e) {}
  };

  const handleAddProductToCart = async (addedProduct: ProductIdObject) => {
    try {
      const { product, item } = await addProductToCart(addedProduct);
      const productId = addedProduct.productId;

      if (isItemInCart(cart, productId)) {
        setCart((prev) =>
          prev.map((cartItem) =>
            cartItem.productId === productId ? item : cartItem
          )
        );
      } else {
        setCart((prev) => prev.concat(item));
      }

      setProducts((prev) =>
        prev.map((prod) => (prod._id === productId ? product : prod))
      );
    } catch (e) {
      console.log(e);
    }
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
      />
    </div>
  );
};

export default App;
