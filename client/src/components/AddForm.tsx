import { useForm } from 'react-hook-form';
import type { FormInput } from '../types';

interface AddFormProps {
  toggleVisibility: () => void;
  onSubmit: (newProduct: FormInput) => Promise<void>;
}

const AddForm = ({ toggleVisibility, onSubmit }: AddFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const handleFormSubmit = (data: FormInput) => {
    onSubmit(data);
    toggleVisibility();
  };

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            {...register('title', { required: 'Product Name is required' })}
          />
          <p>{errors.title?.message}</p>
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            {...register('price', {
              required: 'Price is required',
              min: { value: 0, message: 'Must be greater than 0' },
            })}
            step="0.01"
          />
          <p>{errors.price?.message}</p>
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            {...register('quantity', {
              required: 'Quantity is required',
              min: 0,
            })}
            min="0"
          />
          <p>{errors.quantity?.message}</p>
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
