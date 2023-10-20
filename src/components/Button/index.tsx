import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

//tanto la variants como los sizes estan mockeados
const buttonVariant = cva("rounded-lg", {
  variants: {
    variant: {
      fulfilled: [
        "bg-primary-100 text-white",
        "hover:bg-blue-300 hover:text-white",
        "disabled:bg-grey-300 disabled: text-grey-700",
      ],
      outlined: [
        "bg-white text-primary-100 border border-primary-100",
        "hover:bg-violet-300",
        "disabled:bg-grey-300 disabled:border-grey-300 disabled: text-grey-700",
      ],
    },
    size: {
      small: ["px-4 py-2 text-small"],
      medium: ["px-4 py-3 text-medium"],
      large: ["px-4 py-3 text-large"],
    },
  },
  defaultVariants: {
    variant: "fulfilled",
    size: "medium",
  },
});

//reconoce como props todas las variants y todas las props base de un boton normal de HTML
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {}

const Button = ({ variant, size, ...props }: ButtonProps) => {
  return (
    <>
      <button
        className={buttonVariant({ size: size, variant })}
        {...props}
      ></button>
    </>
  );
};

export default Button;
