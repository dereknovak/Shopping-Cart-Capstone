export interface ProductType {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

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

export type Cart = CartItem[];
