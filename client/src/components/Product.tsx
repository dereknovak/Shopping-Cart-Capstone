import { useContext, useState } from 'react';
import EditForm from './EditForm';
import type { ProductType, FormInput, ProductIdObject } from '../types';
import { ThemeContext } from '../providers/ThemeProvider';

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
  const { isDarkMode, convertCurrency } = useContext(ThemeContext);

  const openEditForm = () => setIsEditFormVisible(true);
  const closeEditForm = () => setIsEditFormVisible(false);

  const handleDelete = () => onDelete(_id);
  const handleAddToCart = () => onAddToCart({ productId: _id });

  return (
    <li className={`product${isDarkMode ? ' dark-mode' : ''}`}>
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{convertCurrency(price)}</p>
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
            closeEditForm={closeEditForm}
          />
        )}
      </div>
    </li>
  );
};

export default Product;
