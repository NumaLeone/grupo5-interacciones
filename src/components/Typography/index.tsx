import {VariantProps, cva} from "class-variance-authority";
import React from "react";

const typographyVariant = cva("text-base", {
    variants: {
        type: {
            h1: ["font-SFProText text-4xl font-bold "],
            h2: ["font-SFProText text-2xl font-medium"],
            body1: ["font-SFProText mb-2"],
            body2: ["font-SFProText mb-2"],
        },
        weight: {}
    },
    defaultVariants: {
        type: "body1",
    },
});

export interface TypographyProps
    extends Omit<React.HTMLProps<HTMLDivElement>, 'type'>,
        VariantProps<typeof typographyVariant> {
    variantType: "h1" | "h2" | "body1" | "body2" | null | undefined;
}

const Typography: React.FC<TypographyProps> = ({variantType, children, ...props}) => {
    return (
        <div className={typographyVariant({type: variantType})} {...props}>
            {children}
        </div>
    );
};

export default Typography;
