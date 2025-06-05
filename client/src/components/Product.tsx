import { useState } from 'react';
import EditForm from './EditForm';
import type { ProductType, FormInput, ProductIdObject } from '../types';

interface ProductProps extends ProductType {
  onUpdate: (productId: string, updatedProduct: FormInput) => Promise<void>;
  onDelete: (productId: string) => Promise<void>;
  onAddToCart: (product: ProductIdObject) => Promise<void>;
}

const Product = ({
  _id,
  title,
  price,
  quantity,
  onUpdate,
  onDelete,
  onAddToCart,
}: ProductProps) => {
  const product = { _id, title, price, quantity };
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const openEditForm = () => setIsEditFormVisible(true);
  const handleDelete = () => onDelete(_id);
  const handleAddToCart = () => onAddToCart({ productId: _id });

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="edit" onClick={openEditForm}>
            Edit
          </button>
        </div>
        <button className="delete-button" onClick={handleDelete}>
          <span>X</span>
        </button>

        {isEditFormVisible && (
          <EditForm
            product={product}
            onUpdate={onUpdate}
            setIsEditFormVisible={setIsEditFormVisible}
          />
        )}
      </div>
    </li>
  );
};

export default Product;
