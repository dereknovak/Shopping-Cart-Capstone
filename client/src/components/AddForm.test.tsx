import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddForm from './AddForm';

test('test title input', async () => {
  render(<AddForm onSubmit={vi.fn()} />);

  const user = userEvent.setup();
  const inputTitle = screen.getByRole('textbox', { name: 'Product Name:' });
  await user.type(inputTitle, 'Testing...');

  expect(inputTitle).toHaveValue('Testing...');
});

test('test price input', async () => {
  render(<AddForm onSubmit={vi.fn()} />);

  const user = userEvent.setup();
  const inputPrice = screen.getByRole('textbox', { name: 'Price:' });
  await user.type(inputPrice, '123.45');

  expect(inputPrice).toHaveValue('123.45');
});
