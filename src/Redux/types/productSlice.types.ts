export type Product = {
    id: string;
    product: {
      name: string,
      img: string
    }
    category: string
    price: number
    status: "In Stock" | "Out of stock";
    company: {
      name: string;
      img: string;
    };
  };

export type ProductTableType = Product[]


export type ProductInitialStateType = {
    products: [] | ProductTableType,
    error: boolean,
    loading: boolean
}