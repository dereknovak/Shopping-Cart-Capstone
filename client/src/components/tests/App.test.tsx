import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { createProduct } from '../../services/products';

vi.mock('../../services/product.ts');
const mockedCreateProduct = vi.mocked(createProduct);

test('Adding a Product adds product to page', async () => {
  const mockedResponse = {
    _id: '68408999fc261d2a5ead9c6e',
    title: 'Test Product 1',
    price: 89.67,
    quantity: 5,
    createdAt: '2025-06-04T17:59:53.644Z',
    updatedAt: '2025-06-04T22:05:55.791Z',
    __v: 0,
  };

  mockedCreateProduct.mockResolvedValue(mockedResponse);

  render(<App />);

  let product = screen.queryByRole('heading', { name: 'Keyboard' });
  expect(product).not.toBeInTheDocument();

  const user = userEvent.setup();
  const addAProductButton = screen.getByRole('button', {
    name: 'Add A Product',
  });
  await user.click(addAProductButton);

  const addButton = screen.getByRole('button', { name: 'Add' });
  await user.click(addButton);

  waitFor(() => {
    product = screen.getByRole('heading', { name: 'Keyboard' });
    expect(product).toBeInTheDocument();
  });
});
