import CartItem from './CartItem';
import { mockCart } from '../mockData/data.ts';
import { useEffect, useState } from 'react';
import type { Cart } from '../types.js';

const Cart = () => {
  const [cartData, setCartData] = useState<Cart>([]);

  useEffect(() => {
    setCartData(mockCart);
  }, []);

  const totalCost = () => cartData.reduce((acc, item) => acc + item.price, 0);

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
          {cartData.map((item) => (
            <CartItem
              key={item._id}
              name={item.title}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">
              Total: ${totalCost()}
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
