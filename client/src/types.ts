import z from 'zod';

const productSchema = z.object({
  _id: z.string(),
  title: z.string(),
  price: z.number().min(0.01),
  quantity: z.number().min(0),
});

export type ProductType = z.infer<typeof productSchema>;

export interface FormInput {
  title: string;
  price: string;
  quantity: string;
}

export type NewProduct = Omit<ProductType, '_id'>;
export type UpdatedProduct = NewProduct;

export type Products = ProductType[];

export interface CartItem extends ProductType {
  productId: string;
}

export type CartType = CartItem[];
