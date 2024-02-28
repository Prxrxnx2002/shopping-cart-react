import { Remove } from "@material-ui/icons";
import { CartItemType } from "../../App";
import { Container } from "./CartItem.styles"
import { Button } from "@material-ui/core";

type CartProps = {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
  handleRemoveFromCart: (item: CartItemType) => void;
}

export const CartItem = ({item, handleAddToCart, handleRemoveFromCart}: CartProps) => {
  return(
    <Container>
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="content-container">
        <h3>{item.title}</h3>
        <div className="details">
          <h3>${item.price}</h3>
          <h3>x{item.amount}</h3>
        </div>
      </div>
      <div className="btn-container">
        <Button variant="outlined" onClick={() => handleRemoveFromCart(item)}><Remove></Remove></Button>
      </div>        
    </Container>
  )
}