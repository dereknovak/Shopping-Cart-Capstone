import CartItem from './CartItem';

const Cart = () => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <CartItem name="Amazon Kindle E-reader" quantity={2} price={79.99} />
          <CartItem
            name="Apple 10.5-Inch iPad Pro"
            quantity={1}
            price={649.99}
          />
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">
              Total: $729.98
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="checkout-button">
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
