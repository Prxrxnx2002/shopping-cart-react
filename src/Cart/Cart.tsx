import { CartItemType } from "../App";
import { Container } from "./Cart.styles"
import { CartItem } from "./CartItem/CartItem";

type CartProps = {
  cartItems: CartItemType[];
  handleAddToCart: (item: CartItemType) => void;
  handleRemoveFromCart: (item: CartItemType) => void;
}

export const Cart = ({cartItems, handleAddToCart, handleRemoveFromCart}: CartProps) => {
  return (
    <Container>
    <h2>Your Shopping Cart</h2>
    {cartItems.length === 0 ? <p>No items in cart</p> : <p>{cartItems.length} items in cart</p>}
    {cartItems.map((item) => {
      return (
        <CartItem
          key={item.id}
          item={item}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )
    })}
    </Container>
  );
}