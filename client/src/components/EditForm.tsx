import type { ProductType } from '../types';

interface EditFormProps extends Omit<ProductType, '_id'> {
  setIsEditFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditForm = ({
  title,
  price,
  quantity,
  setIsEditFormVisible,
}: EditFormProps) => {
  const closeEditForm = () => setIsEditFormVisible(false);

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
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
