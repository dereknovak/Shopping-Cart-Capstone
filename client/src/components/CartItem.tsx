import type { CartItemType } from '../types';

type CartItemProps = Omit<CartItemType, '_id' | 'productId'>;

const CartItem = ({ title, quantity, price }: CartItemProps) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  );
};

export default CartItem;
