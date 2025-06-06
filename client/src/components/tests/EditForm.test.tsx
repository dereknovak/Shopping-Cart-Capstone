import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditForm from '../EditForm';

const mockData = {
  _id: '68408999fc261d2a5ead9c6e',
  title: 'Test Product 1',
  price: 89.67,
  quantity: 5,
  createdAt: '2025-06-04T17:59:53.644Z',
  updatedAt: '2025-06-04T22:05:55.791Z',
  __v: 0,
};

test('Test title input', async () => {
  render(
    <EditForm product={mockData} onUpdate={vi.fn()} closeEditForm={vi.fn()} />
  );

  const user = userEvent.setup();
  const inputTitle = screen.getByRole('textbox', { name: 'Product Name' });

  await user.clear(inputTitle);
  await user.type(inputTitle, 'Testing...');

  expect(inputTitle).toHaveValue('Testing...');
});

test('Test price input', async () => {
  render(
    <EditForm product={mockData} onUpdate={vi.fn()} closeEditForm={vi.fn()} />
  );

  const user = userEvent.setup();
  const inputPrice = screen.getByRole('spinbutton', { name: 'Product Price' });

  await user.clear(inputPrice);
  await user.type(inputPrice, '123.45');

  expect(inputPrice).toHaveValue(123.45);
});

test('Test price input', async () => {
  render(
    <EditForm product={mockData} onUpdate={vi.fn()} closeEditForm={vi.fn()} />
  );

  const user = userEvent.setup();
  const inputQuantity = screen.getByRole('spinbutton', {
    name: 'Product Quantity',
  });

  await user.clear(inputQuantity);
  await user.type(inputQuantity, '27');

  expect(inputQuantity).toHaveValue(27);
});
