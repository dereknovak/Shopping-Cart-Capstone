import axios from 'axios';
import {
  getProducts,
  createProduct,
  updateProduct,
} from '../../services/products';

vi.mock('axios');
const mockedAxios = vi.mocked(axios, true);

test('getProducts request is successful', async () => {
  const mockedResponseData = [
    {
      _id: '61d754d72092473d55a809e1',
      title: 'Kindle',
      price: 50,
      quantity: 2,
      createdAt: '2020-10-04T05:57:02.777Z',
      updatedAt: '2020-10-04T05:57:02.777Z',
      _v: 0,
    },
    {
      _id: '51d754d72092473333a809e1',
      title: 'Mac Mini',
      price: 850,
      quantity: 7,
      createdAt: '2020-10-04T05:57:02.777Z',
      updatedAt: '2020-10-04T05:57:02.777Z',
      _v: 0,
    },
  ];

  mockedAxios.get.mockResolvedValue({ data: mockedResponseData });
  const data = await getProducts();

  expect(JSON.stringify(data)).toEqual(JSON.stringify(mockedResponseData));
});

test('createProduct request is successful', async () => {
  const mockedRequestData = {
    title: 'Keyboard',
    price: 50,
    quantity: 3,
  };

  const mockedResponseData = {
    _id: '61d754d72092473d55a809e1',
    title: 'Keyboard',
    price: 50,
    quantity: 3,
    createdAt: '2020-10-04T05:57:02.777Z',
    updatedAt: '2020-10-04T05:57:02.777Z',
    _v: 0,
  };

  mockedAxios.post.mockResolvedValue({ data: mockedResponseData });
  const data = await createProduct(mockedRequestData);

  expect(JSON.stringify(data)).toEqual(JSON.stringify(mockedResponseData));
});

test('updateProduct request is successful', async () => {
  const mockedProductId = '61d754d72092473d55a809e1';
  const mockedRequestData = {
    title: 'Keyboard',
    price: 50,
    quantity: 3,
  };

  const mockedResponseData = {
    _id: '61d754d72092473d55a809e1',
    title: 'Keyboard',
    price: 50,
    quantity: 3,
    createdAt: '2020-10-04T05:57:02.777Z',
    updatedAt: '2020-10-04T05:57:02.777Z',
    _v: 0,
  };

  mockedAxios.put.mockResolvedValue({ data: mockedResponseData });
  const data = await updateProduct(mockedProductId, mockedRequestData);

  expect(JSON.stringify(data)).toEqual(JSON.stringify(mockedResponseData));
});
