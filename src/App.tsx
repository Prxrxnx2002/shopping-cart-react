import { Grid, LinearProgress } from "@material-ui/core";
import { useQuery } from "react-query";
import { Container } from "./App.styles";
import { Item } from "./Item/Item";

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

  const getTotalItems = () => {
    return null;
  }

  const handleAddToCart = (item: CartItemType) => {
    return null;
  }

  const handleRemoveFromCart =(item : CartItemType) => {
    return null;
  }

  if(isLoading) return <LinearProgress></LinearProgress>;

  if(error) return <div>Something went wrong...</div>

  if(data){
    console.log(data);
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
