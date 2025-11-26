export interface Cart {
  _id: string;
  cartItems: CartItem[];
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  price: number;
  _id: string;
}

interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  imageCover: string;
  images: string[];
  category: Category;
  subcategories: Subcategory[];
  brand: Category;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: Category;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
}
