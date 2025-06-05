import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddForm from '../AddForm';

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
  const inputPrice = screen.getByRole('spinbutton', { name: 'Price:' });
  await user.type(inputPrice, '123.45');

  expect(inputPrice).toHaveValue(123.45);
});

test('test quantity input', async () => {
  render(<AddForm onSubmit={vi.fn()} />);

  const user = userEvent.setup();
  const inputQuantity = screen.getByRole('spinbutton', { name: 'Quantity:' });
  await user.type(inputQuantity, '5');

  expect(inputQuantity).toHaveValue(5);
});

test('Add button shows form and Cancel hides form', async () => {
  const { container } = render(<AddForm onSubmit={vi.fn()} />);

  const user = userEvent.setup();
  const addProductButton = screen.getByRole('button', {
    name: 'Add A Product',
  });
  await user.click(addProductButton);

  const div = container.querySelector('.add-form');
  expect(div).toHaveClass('visible');

  const cancelButton = screen.getByRole('button', { name: 'Cancel' });
  await user.click(cancelButton);

  expect(div).not.toHaveClass('visible');
});
