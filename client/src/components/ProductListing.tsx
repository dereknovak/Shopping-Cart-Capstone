import Product from './Product';
import { mockProducts } from '../mockData/data.ts';
import { useEffect, useState } from 'react';

import type { Products } from '../types.js';

const ProductListing = () => {
  const [products, setProducts] = useState<Products>([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
