import React from "react";
import SearchIcon from "../../icons/navbar/SearchIcon";
import {cva, VariantProps} from "class-variance-authority";

const textFieldVariant = cva("rounded-lg", {
    variants: {
        variant: {
            textField: [
                "bg-greyscale-100 text-greyscale-300 pl-4 py-2 text-ingredientName w-large rounded-lg shadow-cardShadow",
            ],
            searchbar: [
                "bg-greyscale-100 text-greyscale-300 pl-12 py-2 text-ingredientName w-large rounded-lg shadow-cardShadow",
            ],
            textFieldError: [
                "bg-greyscale-100 text-greyscale-300 pl-4 py-2 text-ingredientName w-large rounded-lg",
                "border border-state-error"
            ]
        },
    },
    defaultVariants: {
        variant: "textField",
    },
});

export interface TextFieldInterface extends React.HTMLProps<HTMLInputElement>, VariantProps<typeof textFieldVariant> {
    text: string,
}

const TextField = ({text="Text...", variant}: TextFieldInterface) => {

    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <>
            <div className="">
                <div className="absolute ml-3 mt-2.5" style={variant === "searchbar" ? {} : {display: "none"}}>
                    <SearchIcon checked={isFocused} size={25} />
                </div>
                <input
                    className={textFieldVariant({variant})}
                    style={isFocused ? {border: "10px solid border-primary-500", outline: "none"} : {}}
                    type="text"
                    placeholder={text}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                </input>
                <div className="absolute ml-2 text-state-error" style={variant === "textFieldError" ? {} : {display: "none"}}>
                    Error
                </div>
            </div>
        </>
    );
}

export default TextField;