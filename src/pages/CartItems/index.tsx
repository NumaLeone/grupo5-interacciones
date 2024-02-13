import CartItemContainer from "../../components/CartItemContainer";
import CartItemWithPhoto from "../../components/CartItemWithPhoto";
import img from "../../images/img.png";

const CartItems = () => {
  return (
    <div>
      <CartItemWithPhoto
        name="Placeholder"
        weight={100}
        weightUnit="gr"
        img={img}
      />
      <CartItemContainer
        name="Placeholder"
        weight={100}
        weightUnit="gr"
        img={img}
        price={100}
        quantity={1}
      />
    </div>
  );
};

export default CartItems;
