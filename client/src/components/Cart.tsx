import { useContext } from 'react';
import type { CartItemType, CartType, ProductType } from '../types';
import CartItem from './CartItem';
import { ThemeContext } from '../providers/ThemeProvider';

interface CartProps {
  items: CartType;
  onCheckout: () => Promise<void>;
}

const Cart = ({ items, onCheckout }: CartProps) => {
  const { convertCurrency } = useContext(ThemeContext);

  const totalCost = () => {
    const total = items.reduce((acc: number, item: CartItemType) => {
      return acc + item.price * item.quantity;
    }, 0);

    return convertCurrency(total).toFixed(2);
  };

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
          {items.map((item: ProductType) => (
            <CartItem key={item._id} {...item} />
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
        <button className="checkout" onClick={onCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
