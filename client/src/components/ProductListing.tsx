import Product from './Product';
import {
  type Products,
  type FormInput,
  type ProductIdObject,
  type SortType,
} from '../types.js';
import SortingOptions from './SortingOptions.js';
import CurrencySelector from './CurrencySelector.js';
import ThemeButton from './ThemeButton.js';

interface ProductListingProps {
  products: Products;
  onUpdate: (productId: string, updatedProduct: FormInput) => Promise<void>;
  onDelete: (productId: string) => Promise<void>;
  onAddToCart: (product: ProductIdObject) => Promise<void>;
  onProductSort: (type: SortType) => void;
  isSortTypeSelected: (sortType: SortType) => boolean;
}

const ProductListing = ({
  products,
  onUpdate,
  onDelete,
  onAddToCart,
  onProductSort,
  isSortTypeSelected,
}: ProductListingProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ThemeButton />
      <CurrencySelector />
      <SortingOptions
        isSelected={isSortTypeSelected}
        onProductSort={onProductSort}
      />
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            {...product}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
