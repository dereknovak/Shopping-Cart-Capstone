import { useContext, useState } from 'react';
import type { FormInput, ProductIdObject, Products, SortType } from '../types';
import AddForm from './AddForm';
import ProductListing from './ProductListing';
import AddFormButton from './AddFormButton';
import { ThemeContext } from '../providers/ThemeProvider';

interface MainProps {
  products: Products;
  onSubmit: (newProduct: FormInput) => Promise<void>;
  onUpdate: (productId: string, updatedProduct: FormInput) => Promise<void>;
  onDelete: (productId: string) => Promise<void>;
  onAddToCart: (product: ProductIdObject) => Promise<void>;
  onProductSort: (type: SortType) => void;
  isSortTypeSelected: (sortType: SortType) => boolean;
}

const Main = ({
  products,
  onSubmit,
  onUpdate,
  onDelete,
  onAddToCart,
  onProductSort,
  isSortTypeSelected,
}: MainProps) => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const toggleVisibility = () => setIsAddFormVisible(!isAddFormVisible);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main className={isDarkMode ? ' dark-mode' : ''}>
      <ProductListing
        products={products}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onAddToCart={onAddToCart}
        onProductSort={onProductSort}
        isSortTypeSelected={isSortTypeSelected}
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
