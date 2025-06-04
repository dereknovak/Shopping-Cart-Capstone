import Product from './Product';
import type { Products, FormInput } from '../types.js';

interface ProductListingProps {
  products: Products;
  onProductUpdate: (
    productId: string,
    updatedProduct: FormInput
  ) => Promise<void>;
  onProductDelete: (productId: string) => Promise<void>;
}

const ProductListing = ({
  products,
  onProductUpdate,
  onProductDelete,
}: ProductListingProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            {...product}
            onUpdate={onProductUpdate}
            onDelete={onProductDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
