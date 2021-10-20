export interface Product {
  product_id: string;
  name: string;
  slug: string;
  category: Category;
  default_variant: [Products]
}

interface Products {
  name: string;
  id: string;
  description: string;
  image: string;
  price: number;
}

interface Category {
  name: string;
}
