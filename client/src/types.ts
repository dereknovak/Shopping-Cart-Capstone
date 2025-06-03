export interface ProductType {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}

export type Products = ProductType[];

export interface CartItem extends ProductType {
  productId: string;
}

export type Cart = CartItem[];
