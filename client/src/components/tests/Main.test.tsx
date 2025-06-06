import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../Main';

const mockData = [
  {
    _id: '68408999fc261d2a5ead9c6e',
    title: 'Test Product 1',
    price: 89.67,
    quantity: 5,
    createdAt: '2025-06-04T17:59:53.644Z',
    updatedAt: '2025-06-04T22:05:55.791Z',
    __v: 0,
  },
];

test('Display form when Add Button is clicked', async () => {
  render(
    <Main
      products={mockData}
      onSubmit={vi.fn()}
      onUpdate={vi.fn()}
      onDelete={vi.fn()}
      onAddToCart={vi.fn()}
    />
  );

  const user = userEvent.setup();
  const AddFormButton = screen.getByRole('button', { name: 'Add A Product' });
  let input = screen.queryByRole('textbox', { name: 'Product Name:' });

  expect(input).not.toBeInTheDocument();
  await user.click(AddFormButton);

  input = screen.getByRole('textbox', { name: 'Product Name:' });
  expect(input).toBeInTheDocument();
});
