import { useState } from 'react';
import EditForm from './EditForm';
import type { ProductType } from '../types';

type ProductProps = Omit<ProductType, '_id'>;

const Product = ({ title, price, quantity }: ProductProps) => {
  const [editVisibility, setEditVisibility] = useState(false);
  const toggleEditVisibility = () => setEditVisibility(!editVisibility);

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={toggleEditVisibility}>
            Edit
          </button>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>
        <EditForm
          editVisibility={editVisibility}
          name={name}
          price={price}
          quantity={quantity}
        />
      </div>
    </li>
  );
};

export default Product;
