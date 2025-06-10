import { useContext } from 'react';
import type { CartItemType } from '../types';
import { ThemeContext } from '../providers/ThemeProvider';

type CartItemProps = Omit<CartItemType, '_id' | 'productId'>;

const CartItem = ({ title, quantity, price }: CartItemProps) => {
  const { convertCurrency } = useContext(ThemeContext);
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${convertCurrency(price).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
