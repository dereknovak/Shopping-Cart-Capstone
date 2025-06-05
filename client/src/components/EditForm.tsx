import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import type { ProductType, FormInput } from '../types';

interface EditFormProps {
  product: ProductType;
  onUpdate: (productId: string, updatedProduct: FormInput) => Promise<void>;
  setIsEditFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditForm = ({
  product,
  onUpdate,
  setIsEditFormVisible,
}: EditFormProps) => {
  const [data, setData] = useState({
    title: product.title,
    price: String(product.price),
    quantity: String(product.quantity),
  });
  const closeEditForm = () => setIsEditFormVisible(false);

  const handleUpdate = (e: SyntheticEvent) => {
    e.preventDefault();
    onUpdate(product._id, data);
    closeEditForm();
  };

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleUpdate}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            name="title"
            value={data.title}
            onChange={handleDataChange}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            name="price"
            value={data.price}
            onChange={handleDataChange}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            name="quantity"
            value={data.quantity}
            onChange={handleDataChange}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={closeEditForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
