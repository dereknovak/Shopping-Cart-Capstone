import { useContext } from 'react';
import type { CartItemType } from '../types';
import { CurrencyContext } from '../providers/CurrencyProvider';

type CartItemProps = Omit<CartItemType, '_id' | 'productId'>;

const CartItem = ({ title, quantity, price }: CartItemProps) => {
  const { convertCurrency } = useContext(CurrencyContext);
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{convertCurrency(price)}</td>
    </tr>
  );
};

export default CartItem;
