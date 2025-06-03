import { useState } from 'react';
import EditForm from './EditForm';
import type { ProductType } from '../types';

type ProductProps = Omit<ProductType, '_id'>;

const Product = ({ title, price, quantity }: ProductProps) => {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const openEditForm = () => setIsEditFormVisible(true);

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={openEditForm}>
            Edit
          </button>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>

        {isEditFormVisible && (
          <EditForm
            title={title}
            price={price}
            quantity={quantity}
            setIsEditFormVisible={setIsEditFormVisible}
          />
        )}
      </div>
    </li>
  );
};

export default Product;
