import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import type { FormInput } from '../types';

export const emptyInputForm = {
  title: '',
  price: '',
  quantity: '',
};

interface AddFormProps {
  onSubmit: (newProduct: FormInput) => Promise<void>;
}

const AddForm = ({ onSubmit }: AddFormProps) => {
  const [data, setData] = useState<FormInput>(emptyInputForm);
  const [formVisibility, setFormVisibility] = useState(false);
  const toggleVisibility = () => setFormVisibility(!formVisibility);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit(data);
  };

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`add-form${formVisibility ? ' visible' : ''}`}>
      <p>
        <button className={`add-product-button`} onClick={toggleVisibility}>
          Add A Product
        </button>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="title"
            value={data.title}
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
            value={data.price}
            onChange={handleDataChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            value={data.quantity}
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
