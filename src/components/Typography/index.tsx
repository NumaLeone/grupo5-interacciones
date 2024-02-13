import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const typographyVariant = cva("font-SFProText", {
  variants: {
    type: {
      h1: ["text-3xl"],
      h2: ["text-2xl"],
      h3: ["text-xl"],
      s1: ["text-lg"],
      body1: ["text-base"],
      body2: ["text-sm"],
      caption1: ["text-xs"],
    },
    weight: {
      normal: ["font-normal"],
      bold: ["font-bold"],
      medium: ["font-medium"],
      light: ["font-light"],
    },
  },
  defaultVariants: {
    type: "body1",
    weight: "normal",
  },
});

export interface TypographyProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "type">,
    VariantProps<typeof typographyVariant> {
  type: "h1" | "h2" | "h3" | "s1" | "body1" | "body2" | "caption1";
  weight: "normal" | "bold" | "medium" | "light";
}

const Typography: React.FC<TypographyProps> = ({
  type,
  weight,
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${typographyVariant({
        type,
        weight,
      })} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Typography;
