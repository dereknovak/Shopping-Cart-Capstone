const CartItem = ({ name, quantity, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
  );
};

export default CartItem;
