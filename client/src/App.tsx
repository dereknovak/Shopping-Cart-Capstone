import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from './services/products';
import type { FormInput, Products } from './types';

const App = () => {
  const [products, setProducts] = useState<Products>([]);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);

  const convertInputToData = (input: FormInput) => {
    return {
      title: input.title,
      price: Number(input.price),
      quantity: Number(input.quantity),
    };
  };

  const handleAddFormSubmission = async (newProduct: FormInput) => {
    try {
      const cleanData = convertInputToData(newProduct);
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
      const cleanData = convertInputToData(updatedProduct);
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

  return (
    <div id="app">
      <Header />
      <Main
        products={products}
        onSubmit={handleAddFormSubmission}
        onUpdate={handleProductUpdate}
        onDelete={handleProductDelete}
      />
    </div>
  );
};

export default App;
