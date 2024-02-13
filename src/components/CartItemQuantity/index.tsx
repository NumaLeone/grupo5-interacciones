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
      <div className="flex flex-row w-full items-center">
        <Typography type="body2" weight="bold" className="text-greyscale-600">
          {"$" + price}
        </Typography>
        <button onClick={decreaseQuantity}>
          <img
            src={quantity === 1 ? TrashIcon : MinusIcon}
            alt="Minus Icon"
            className={quantity === 1 ? "ml-5 mr-6" : "ml-6 mr-7"}
          />
        </button>
        <Typography type="body1" weight="bold" className="text-greyscale-600">
          {quantity}
        </Typography>
        <button onClick={increaseQuantity}>
          <img src={PlusIcon} alt="Plus Icon" className="mx-8" />
        </button>
      </div>
    </div>
  );
};

export default CartItemQuantity;
