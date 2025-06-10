import { useContext } from 'react';
import type { FormInput, ProductIdObject, Products, SortType } from '../types';
import AddForm from './AddForm';
import ProductListing from './ProductListing';
import AddFormButton from './AddFormButton';
import { ThemeContext } from '../providers/ThemeProvider';
import useToggle from '../hooks/useToggle';

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
  const [isAddFormVisible, toggleAddForm] = useToggle(false);
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
        <AddForm toggleVisibility={toggleAddForm} onSubmit={onSubmit} />
      ) : (
        <AddFormButton toggleVisibility={toggleAddForm} />
      )}
    </main>
  );
};

export default Main;
