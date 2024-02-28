import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import { Container } from "./Item.styles";

type ItemProps = {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
  handleRemoveFromCart: (item: CartItemType) => void;
}

export const Item = ({ item, handleAddToCart, handleRemoveFromCart }: ItemProps) => {
  return(
    <Container>
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="content-container">
        <h2>{item.title}</h2>
        <h3>${item.price}</h3>
        <p>{item.description}</p>
      </div>
      <div className="btn-container">
        <Button onClick={() => handleRemoveFromCart(item)}>Remove From Cart</Button>
        <Button variant="outlined" onClick={() => handleAddToCart(item)}>Add To Cart</Button>
      </div>
    </Container>
  )
}