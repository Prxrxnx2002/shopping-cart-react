import { useQuery } from "react-query";

export type CartItemType = {
  id: number;
  category: string;
  title: string;
  price: number;
  image: string;
  description: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);

  return (
    <div className="App">
      Shopping Cart.
    </div>
  );
}

export default App;
