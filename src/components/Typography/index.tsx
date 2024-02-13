import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const typographyVariant = cva("text-base font-SFProText", {
  variants: {
    type: {
      h1: ["text-4xl"],
      h2: ["text-3xl"],
      h3: ["text-2xl"],
      h4: ["text-xl"],
      body1: ["text-base"],
      body2: ["text-sm"],
    },
    weight: {
      normal: ["font-normal"],
      bold: ["font-bold"],
      medium: ["font-medium"],
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
  variantType: "h1" | "h2" | "h3" | "h4" | "body1" | "body2";
  variantWeight: "normal" | "bold" | "medium";
}

const Typography: React.FC<TypographyProps> = ({
  variantType,
  variantWeight,
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${typographyVariant({
        type: variantType,
        weight: variantWeight,
      })} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Typography;
