import React from "react";
import MinusIcon from "../../icons/cartItem/MinusIcon.svg";
import TrashIcon from "../../icons/cartItem/TrashIcon.svg";
import PlusIcon from "../../icons/cartItem/PlusIcon.svg";
import Typography from "../Typography";
interface CartItemQuantityProps {
  price: number;
  quantity: number;
  setItemQuantity: (quantity: number) => void;
}

const CartItemQuantity: React.FC<CartItemQuantityProps> = ({
  price,
  quantity,
  setItemQuantity,
}) => {
  const increaseQuantity = () => {
    setItemQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setItemQuantity(quantity - 1);
    }
  };
  const handleTrashClick = () => {
    // Aquí puedes manejar la lógica para eliminar el ítem del carrito
  };

  return (
    <div className="h-12 w-52 flex items-center">
      <div className="flex flex-row w-full">
        <Typography variantType="body2" variantWeight="bold">
          {"$" + price}
        </Typography>
        {quantity === 1 ? (
          <img
            src={TrashIcon}
            alt="Trash Icon"
            onClick={handleTrashClick}
            className="ml-6 mr-9"
          />
        ) : (
          <img
            src={MinusIcon}
            alt="Minus Icon"
            onClick={decreaseQuantity}
            className="ml-6 mr-9"
          />
        )}
        <p>{quantity}</p>
        <img
          src={PlusIcon}
          alt="Plus Icon"
          onClick={increaseQuantity}
          className="mx-9"
        />
      </div>
    </div>
  );
};

export default CartItemQuantity;
