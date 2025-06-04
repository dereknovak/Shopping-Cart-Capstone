import { useEffect, useState } from 'react';
import AddForm from './AddForm';
import ProductListing from './ProductListing';
import type { FormInput, Products } from '../types';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../services/products';

const Main = () => {
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
    <main>
      <ProductListing
        products={products}
        onProductUpdate={handleProductUpdate}
        onProductDelete={handleProductDelete}
      />
      <AddForm onSubmit={handleAddFormSubmission} />
    </main>
  );
};

export default Main;
