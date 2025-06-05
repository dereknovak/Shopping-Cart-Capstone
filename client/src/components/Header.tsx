import type { CartType } from '../types';
import Cart from './Cart';

interface HeaderProps {
  cart: CartType;
}

const Header = ({ cart }: HeaderProps) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart items={cart} />
    </header>
  );
};

export default Header;
