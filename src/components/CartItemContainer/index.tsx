import React, { useEffect } from "react";
import CartItemWithPhoto from "../CartItemWithPhoto";
import CartItemQuantity from "../CartItemQuantity";
import defaultImage from "../../images/img.png";

interface CartItemContainerProps {
  name: string;
  weight: number;
  weightUnit: string;
  img: string;
  price: number;
  quantity: number;
}

const CartItemContainer: React.FC<CartItemContainerProps> = ({
  name = "[ingredient]",
  weight = 0,
  weightUnit = "",
  img = defaultImage,
  price = 100,
  quantity = 1,
}) => {
  const [itemQuantity, setItemQuantity] = React.useState(quantity);
  useEffect(() => {
    setItemQuantity(quantity);
  }, [quantity]);
  return (
    <div className="flex flex-row">
      <CartItemWithPhoto
        name={name}
        weight={weight}
        weightUnit={weightUnit}
        img={img}
      />
      <CartItemQuantity
        price={price}
        quantity={itemQuantity}
        setItemQuantity={setItemQuantity}
      />
    </div>
  );
};

export default CartItemContainer;
