import Product from './Product';
import type { Products, FormInput } from '../types.js';

interface ProductListingProps {
  products: Products;
  onUpdate: (productId: string, updatedProduct: FormInput) => Promise<void>;
  onDelete: (productId: string) => Promise<void>;
}

const ProductListing = ({
  products,
  onUpdate,
  onDelete,
}: ProductListingProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            {...product}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
