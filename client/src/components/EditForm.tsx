import { useEffect } from 'react';
import type { ProductType, FormInput } from '../types';
import { useForm } from 'react-hook-form';

interface EditFormProps {
  product: ProductType;
  onUpdate: (productId: string, updatedProduct: FormInput) => Promise<void>;
  closeEditForm: () => void;
}

const EditForm = ({ product, onUpdate, closeEditForm }: EditFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: product,
  });

  useEffect(() => {
    reset(product);
  }, [product.quantity, reset]);

  const handleUpdate = (data: FormInput) => {
    onUpdate(product._id, data);
    closeEditForm();
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            {...register('title', { required: 'Product Name is required' })}
            aria-label="Product Name"
          />
          <p>{errors.title?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            {...register('price', { required: 'Price is required' })}
            aria-label="Product Price"
          />
          <p>{errors.price?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            {...register('quantity', { required: 'Quantity is required' })}
            aria-label="Product Quantity"
          />
          <p>{errors.quantity?.message}</p>
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
