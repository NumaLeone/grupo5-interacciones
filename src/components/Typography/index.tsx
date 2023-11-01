import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const typographyVariant = cva("text-base", {
    variants: {
        type: {
            h1: ["text-4xl"],
            body1: ["font-normal mb-2"],
            body2: ["font-normal mb-2"],
        },
        weight:{

        }
    },
    defaultVariants: {
        type: "body1",
    },
});

export interface TypographyProps
    extends Omit<React.HTMLProps<HTMLDivElement>, 'type'>,
        VariantProps<typeof typographyVariant> {
    variantType: "h1" | "body1" | "body2" | null | undefined;
}

const Typography: React.FC<TypographyProps> = ({ variantType, children, ...props }) => {
    return (
        <div className={typographyVariant({ type: variantType })} {...props}>
            {children}
        </div>
    );
};

export default Typography;
