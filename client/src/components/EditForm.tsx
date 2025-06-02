const EditForm = ({ editVisibility, name, price, quantity }) => {
  return (
    <div className={`edit-form${editVisibility ? ' visible' : ''}`}>
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={name}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
