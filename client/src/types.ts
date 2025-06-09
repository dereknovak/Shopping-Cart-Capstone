import z from 'zod';

const productSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number().min(0.01),
  quantity: z.number().min(0),
});

export type ProductType = z.infer<typeof productSchema>;

export type NewProduct = Omit<ProductType, '_id'>;
export type UpdatedProduct = NewProduct;

export interface FormInput {
  title: string;
  price: string | number;
  quantity: string | number;
}

export type Products = ProductType[];

export interface CartItemType extends ProductType {
  productId: string;
}

export type CartType = CartItemType[];

export interface ProductIdObject {
  productId: string;
}

export type SortType = 'newest' | 'title' | 'price' | 'quantity';
