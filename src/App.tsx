import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { useQuery } from "react-query";
import { Container, StyledButton } from "./App.styles";
import { Item } from "./Item/Item";
import { useState } from "react";
import { AddShoppingCart } from "@material-ui/icons";
import { Cart } from "./Cart/Cart";

export type CartItemType = {
  id: number;
  category: string;
  title: string;
  price: number;
  image: string;
  description: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const totalItems = cartItems.reduce((acc, item) => acc + item.amount, 0);

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts,{
    refetchOnWindowFocus: false,
  });

  const getTotalItems = () => {
    return null;
  }

  const handleAddToCart = (item: CartItemType) => {
    const items = [...cartItems];
    if(items.find(i => i.id === item.id)) {
      const index = items.findIndex(i => i.id === item.id);
      items[index].amount++;
    }else{
      items.push({...item, amount: 1});
    }
    setCartItems(items);
  }

  const handleRemoveFromCart =(item : CartItemType) => {
    const items = [...cartItems];
    const index = items.findIndex(i => i.id === item.id);
    if(index === -1) return;
    if(items[index].amount === 1) {
      items.splice(index, 1);
    }else{
      items[index].amount--;
    }
    setCartItems(items);
  }

  if(isLoading) return <LinearProgress></LinearProgress>;

  if(error) return <div>Something went wrong...</div>

  return (
    <Container>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}><Badge badgeContent={totalItems} color="error"><AddShoppingCart></AddShoppingCart></Badge></StyledButton>
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
