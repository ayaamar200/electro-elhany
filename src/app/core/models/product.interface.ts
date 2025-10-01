export interface Product {
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
  subcategories: string[];
  brand: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  _id: string;
  name: string;
}
