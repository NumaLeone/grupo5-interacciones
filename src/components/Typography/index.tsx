import {VariantProps, cva} from "class-variance-authority";
import React from "react";

const typographyVariant = cva("text-base", {
    variants: {
        type: {
            h1: ["font-SFProText text-4xl"],
            h2: ["font-SFProText text-2xl"],
            body1: ["font-SFProText mb-2"],
            body2: ["font-SFProText mb-2"],
        },
        weight: {
            normal: ["font-normal"],
            bold: ["font-bold"],
            medium: ["font-medium"]
        }
    },
    defaultVariants: {
        type: "body1",
        weight: "normal"
    },
});

export interface TypographyProps
    extends Omit<React.HTMLProps<HTMLDivElement>, 'type'>,
        VariantProps<typeof typographyVariant> {
    variantType: "h1" | "h2" | "body1" | "body2";
    variantWeight: "normal" | "bold" | "medium";
}

const Typography: React.FC<TypographyProps> = ({variantType, variantWeight, children, ...props}) => {
    return (
        <div className={typographyVariant({type: variantType, weight: variantWeight})} {...props}>
            {children}
        </div>
    );
};

export default Typography;
