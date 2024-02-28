import { Add, Remove } from "@material-ui/icons";
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
          <span>
            <strong>Price:</strong>
            <p>${item.price}</p>            
          </span>
          <span>
            <strong>Total:</strong>
            <p>${item.price * item.amount}</p>
          </span>
        </div>
      </div>
      <div className="btn-container">
        <Button variant="outlined" onClick={() => handleRemoveFromCart(item)}><Remove></Remove></Button>
        <h3>{item.amount}</h3>
        <Button variant="outlined" onClick={() => handleAddToCart(item)}><Add></Add></Button>
      </div>        
    </Container>
  )
}