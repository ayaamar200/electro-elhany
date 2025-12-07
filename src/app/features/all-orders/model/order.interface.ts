export interface Order {
  shippingAddress: ShippingAddress;
  _id: string;
  guestId: string;
  orderItems: OrderItem[];
  taxPrice: number;
  shippingPrice: number;
  contactEmail: string;
  paymentMethod: string;
  isPaid: boolean;
  orderStatus: string;
  isDelivered: boolean;
  totalOrderPrice: number;
  createdAt: string;
  updatedAt: string;
}

interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
  _id: string;
}

interface Product {
  _id: string;
  title: string;
  imageCover: string;
  category: Category;
  subcategories: Subcategory[];
  brand: Category;
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

interface ShippingAddress {
  fullName: string;
  phone: string;
  country: string;
  city: string;
  governorate: string;
  postalCode: string;
  streetAddress: string;
  building: string;
  notes: string;
}
