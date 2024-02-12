import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

//tanto la variants como los sizes estan mockeados
const buttonVariant = cva("rounded-lg", {
  variants: {
    variant: {
      fulfilled: [
        "bg-primary-500 text-white",
        // "hover:bg-secondary-400 hover:text-white",
        "disabled:bg-greysclae-400 disabled: text-greysclae-400",
      ],
      outlined: [
        "bg-primary-300 text-primary-500 border border-primary-500",
        // "hover:bg-secondary-400 hover:text-white",
        "disabled:bg-greysclae-400 disabled:border-grey-300 disabled: text-greysclae-400",
      ],
      error: [
        "bg-state-error text-greyscale-white border",
      ]
    },
    size: {
      small: ["px-4 py-2 text-small"],
      medium: ["px-4 py-3 text-medium"],
      large: ["px-4 py-3 text-large w-large"],
    },
  },
  defaultVariants: {
    variant: "fulfilled",
    size: "medium",
  },
});

//reconoce como props todas las variants y todas las props base de un boton normal de HTML
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
  text: string,
}

const Button = ({ variant, size, text='Button', ...props }: ButtonProps) => {
  return (
    <>
      <button
        className={buttonVariant({ size: size, variant })}
        {...props}
        onClick={() => console.log('click')}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
