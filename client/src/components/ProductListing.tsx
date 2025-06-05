import Product from './Product';
import type { Products, FormInput, ProductIdObject } from '../types.js';

interface ProductListingProps {
  products: Products;
  onUpdate: (productId: string, updatedProduct: FormInput) => Promise<void>;
  onDelete: (productId: string) => Promise<void>;
  onAddToCart: (product: ProductIdObject) => Promise<void>;
}

const ProductListing = ({
  products,
  onUpdate,
  onDelete,
  onAddToCart,
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
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
