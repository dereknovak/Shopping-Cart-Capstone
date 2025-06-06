import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddForm from '../AddForm';

test('Test title input', async () => {
  render(<AddForm toggleVisibility={vi.fn()} onSubmit={vi.fn()} />);

  const user = userEvent.setup();
  const inputTitle = screen.getByRole('textbox', { name: 'Product Name:' });
  await user.type(inputTitle, 'Testing...');

  expect(inputTitle).toHaveValue('Testing...');
});

test('Test price input', async () => {
  render(<AddForm toggleVisibility={vi.fn()} onSubmit={vi.fn()} />);

  const user = userEvent.setup();
  const inputPrice = screen.getByRole('spinbutton', { name: 'Price:' });
  await user.type(inputPrice, '123.45');

  expect(inputPrice).toHaveValue(123.45);
});

test('Test quantity input', async () => {
  render(<AddForm toggleVisibility={vi.fn()} onSubmit={vi.fn()} />);

  const user = userEvent.setup();
  const inputQuantity = screen.getByRole('spinbutton', { name: 'Quantity:' });
  await user.type(inputQuantity, '5');

  expect(inputQuantity).toHaveValue(5);
});
