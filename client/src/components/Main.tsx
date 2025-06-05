import { useState } from 'react';
import type { FormInput, Products } from '../types';
import AddForm from './AddForm';
import ProductListing from './ProductListing';
import AddFormButton from './AddFormButton';

interface MainProps {
  products: Products;
  onSubmit: (newProduct: FormInput) => Promise<void>;
  onUpdate: (productId: string, updatedProduct: FormInput) => Promise<void>;
  onDelete: (productId: string) => Promise<void>;
}

const Main = ({ products, onSubmit, onUpdate, onDelete }: MainProps) => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const toggleVisibility = () => setIsAddFormVisible(!isAddFormVisible);

  return (
    <main>
      <ProductListing
        products={products}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
      {isAddFormVisible ? (
        <AddForm toggleVisibility={toggleVisibility} onSubmit={onSubmit} />
      ) : (
        <AddFormButton toggleVisibility={toggleVisibility} />
      )}
    </main>
  );
};

export default Main;
