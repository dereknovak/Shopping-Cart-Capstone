import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import type { FormInput } from '../types';

export const emptyInputForm = {
  title: '',
  price: '',
  quantity: '',
};

interface AddFormProps {
  toggleVisibility: () => void;
  onSubmit: (newProduct: FormInput) => Promise<void>;
}

const AddForm = ({ toggleVisibility, onSubmit }: AddFormProps) => {
  const [formData, setFormData] = useState<FormInput>(emptyInputForm);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit(formData);
    toggleVisibility();
  };

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="title"
            value={formData.title}
            onChange={handleDataChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="price"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleDataChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="quantity"
            min="0"
            value={formData.quantity}
            onChange={handleDataChange}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={toggleVisibility}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
