import z from 'zod';

const productSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number().min(0.01),
  quantity: z.number().min(0),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  _v: z.number().optional(),
});

const cartItemSchema = z.object({
  _id: z.string(),
  productId: z.string(),
  title: z.string(),
  price: z.number().min(0.01),
  quantity: z.number().min(0),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  _v: z.number().optional(),
});

const formInputSchema = z.object({
  title: z.string(),
  price: z.union([z.string(), z.number()]),
  quantity: z.union([z.string(), z.number()]),
});

export type ProductType = z.infer<typeof productSchema>;
export type CartItemType = z.infer<typeof cartItemSchema>;

export type NewProduct = Omit<ProductType, '_id'>;
export type UpdatedProduct = NewProduct;

export type Products = ProductType[];
export type CartType = CartItemType[];

export type FormInput = z.infer<typeof formInputSchema>;

export interface ProductIdObject {
  productId: string;
}

export type SortType = 'newest' | 'title' | 'price' | 'quantity';
