import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from '../Product';

const mockData = {
  "_id": "68408999fc261d2a5ead9c6e",
  "title": "Test Product 1",
  "price": 89.67,
  "quantity": 5,
  "createdAt": "2025-06-04T17:59:53.644Z",
  "updatedAt": "2025-06-04T22:05:55.791Z",
  "__v": 0
},

test('Edit button opens form', () => {
  const { container } = render(
    <Product
      _id={mockData._id}
      title={mockData.title}
      price={mockData.price}
      quantity={mockData.quantity}
      onUpdate={vi.fn()}
      onDelete={vi.fn()}
    />
  );

  const user = userEvent.setup()
  const editButton = screen.getByRole('button', { name: 'Edit' });

  user.click(editButton);
  


});
