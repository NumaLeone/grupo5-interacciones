import React from "react";
import Typography from "../Typography";

interface CartItemWithPhotoProps {
  name: string;
  weight: number;
  weightUnit: string;
  img: string;
}

const CartItemWithPhoto: React.FC<CartItemWithPhotoProps> = ({
  name,
  weight,
  weightUnit,
  img,
}) => {
  return (
    <div className="flex flex-row h-12 w-44 items-center">
      <div>
        <img src={img} alt={name} className="h-11 w-11 rounded-full mr2.5" />
      </div>
      <div className="flex flex-col h-full py-1.5 ml-2.5 justify-center">
        <Typography className="" variantType="body2" variantWeight="bold">
          {name}
        </Typography>
        <Typography
          className=""
          variantType="body2"
          variantWeight="normal"
        >{`${weight} ${weightUnit}`}</Typography>
      </div>
    </div>
  );
};

export default CartItemWithPhoto;
