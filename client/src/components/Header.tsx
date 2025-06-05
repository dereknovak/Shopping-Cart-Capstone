import type { CartType } from '../types';
import Cart from './Cart';

interface HeaderProps {
  cart: CartType;
  onCheckout: () => Promise<void>;
}

const Header = ({ cart, onCheckout }: HeaderProps) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart items={cart} onCheckout={onCheckout} />
    </header>
  );
};

export default Header;
