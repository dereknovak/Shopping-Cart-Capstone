import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import {
  addProductToCart,
  checkoutCart,
  createProduct,
  getCart,
  getProducts,
} from '../../services/products';

vi.mock('../../services/products.ts');
const mockedCreateProduct = vi.mocked(createProduct);
const mockedGetProducts = vi.mocked(getProducts);
const mockedGetCart = vi.mocked(getCart);
const mockedCheckoutCart = vi.mocked(checkoutCart);
const mockedAddToCart = vi.mocked(addProductToCart);

const mockProductData = [
  {
    _id: '68408999fc261d2a5ead9c6e',
    title: 'Keyboard',
    price: 89.67,
    quantity: 7,
    createdAt: '2025-06-04T17:59:53.644Z',
    updatedAt: '2025-06-04T22:05:55.791Z',
    __v: 0,
  },
];

const mockCartData = [
  {
    _id: '545454f72092473d55a809e1',
    title: 'Keyboard',
    price: 89.67,
    quantity: 1,
    productId: '61d754d72092473d55a809e1',
    createdAt: '2020-10-04T05:57:02.777Z',
    updatedAt: '2020-10-04T05:57:02.777Z',
    _v: 0,
  },
];

afterEach(() => {
  vi.resetAllMocks();
});

test('Adding a Product closes form and product appears in list', async () => {
  const mockedResponse = {
    _id: 'mockId',
    title: 'Keyboard',
    price: 30,
    quantity: 5,
    createdAt: '2025-06-04T17:59:53.644Z',
    updatedAt: '2025-06-04T22:05:55.791Z',
    __v: 0,
  };

  mockedCreateProduct.mockResolvedValue(mockedResponse);
  mockedGetProducts.mockResolvedValue([]);
  mockedGetCart.mockResolvedValue([]);

  render(<App />);
  const user = userEvent.setup();

  let product = screen.queryByRole('heading', { name: 'Keyboard' });
  expect(product).not.toBeInTheDocument();

  const addAProductButton = screen.getByRole('button', {
    name: 'Add A Product',
  });
  await user.click(addAProductButton);

  const title = screen.getByRole('textbox', { name: /product name/i });
  const price = screen.getByRole('spinbutton', { name: /price/i });
  const quantity = screen.getByRole('spinbutton', { name: /quantity/i });

  await user.type(title, 'x');
  await user.type(price, '1');
  await user.type(quantity, '1');

  const addButton = screen.getByRole('button', { name: 'Add' });
  await user.click(addButton);

  product = await screen.findByRole('heading', { name: 'Keyboard' });
  expect(product).toBeInTheDocument();

  expect(title).not.toBeInTheDocument();
});

test('Add to Cart with existing item updates product and cart quantity', async () => {
  const mockedResponse = {
    product: {
      _id: '68408999fc261d2a5ead9c6e',
      title: 'Keyboard',
      price: 89.67,
      quantity: 6,
      createdAt: '2020-10-04T05:57:02.777Z',
      updatedAt: '2020-10-04T05:57:02.777Z',
      _v: 0,
    },
    item: {
      _id: '51d754d72092473333a809e1',
      title: 'Keyboard',
      price: 89.67,
      quantity: 2,
      productId: '68408999fc261d2a5ead9c6e',
      createdAt: '2020-10-04T05:57:02.777Z',
      updatedAt: '2020-10-04T05:57:02.777Z',
      _v: 0,
    },
  };

  mockedGetProducts.mockResolvedValue(mockProductData);
  mockedGetCart.mockResolvedValue(mockCartData);
  mockedAddToCart.mockResolvedValue(mockedResponse);

  render(<App />);
  const user = userEvent.setup();

  let cartQuantity = await screen.findByRole('cell', { name: '1' });
  expect(cartQuantity).toHaveTextContent('1');

  let productQuantity = screen.getByText(/left in stock/);
  expect(productQuantity).toHaveTextContent('7 left in stock');

  const addToCartButton = screen.getByRole('button', {
    name: 'Add to Cart',
  });
  await user.click(addToCartButton);

  cartQuantity = await screen.findByRole('cell', { name: '2' });
  expect(cartQuantity).toHaveTextContent('2');
  expect(productQuantity).toHaveTextContent('6 left in stock');
});

test('Adds new item to cart and displays quantity', async () => {
  const mockedResponse = {
    product: {
      _id: '68408999fc261d2a5ead9c6e',
      title: 'Keyboard',
      price: 89.67,
      quantity: 6,
      createdAt: '2020-10-04T05:57:02.777Z',
      updatedAt: '2020-10-04T05:57:02.777Z',
      _v: 0,
    },
    item: {
      _id: '51d754d72092473333a809e1',
      title: 'Keyboard',
      price: 89.67,
      quantity: 1,
      productId: '68408999fc261d2a5ead9c6e',
      createdAt: '2020-10-04T05:57:02.777Z',
      updatedAt: '2020-10-04T05:57:02.777Z',
      _v: 0,
    },
  };

  mockedGetProducts.mockResolvedValue(mockProductData);
  mockedGetCart.mockResolvedValue([]);
  mockedAddToCart.mockResolvedValue(mockedResponse);

  render(<App />);
  const user = userEvent.setup();

  await waitFor(() => {
    const cartQuantity = screen.queryByRole('cell', { name: '1' });
    expect(cartQuantity).not.toBeInTheDocument();
  });

  const addToCartButton = await screen.findByRole('button', {
    name: 'Add to Cart',
  });
  await user.click(addToCartButton);

  const cartQuantity = await screen.findByRole('cell', { name: '1' });
  expect(cartQuantity).toBeInTheDocument();
});

test('Deleting Product removes it from the list', async () => {
  const user = userEvent.setup();
  mockedGetProducts.mockResolvedValue(mockProductData);
  mockedGetCart.mockResolvedValue([]);

  render(<App />);

  const deleteButton = await screen.findByText('X');
  await user.click(deleteButton);

  expect(deleteButton).not.toBeInTheDocument();
});

test('Clicking Checkout removes items from cart', async () => {
  mockedGetProducts.mockResolvedValue([]);
  mockedGetCart.mockResolvedValue(mockCartData);
  mockedCheckoutCart.mockResolvedValue({});

  render(<App />);
  const user = userEvent.setup();

  const checkoutButton = await screen.findByRole('button', {
    name: 'Checkout',
  });
  await user.click(checkoutButton);

  let cartItem;
  await waitFor(() => {
    cartItem = screen.queryByRole('cell', { name: 'Keyboard' });
  });
  expect(cartItem).not.toBeInTheDocument();
});
