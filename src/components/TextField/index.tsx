import React from "react";
interface RecipeCardInterface {
    name: string,
    price: number,
    pricePerKG: number,
    saved?: boolean,
    img: string
}

const handleClick = () =>{
    console.log(1)
    return 1
}

const TextField = ({name, price, pricePerKG, saved = false, img}: RecipeCardInterface) => {


    return (
        <>
            <input
                className={"bg-secondary-0 text-secondary-40 px-4 py-3 text-large w-large rounded-lg shadow-cardShadow"}
                type="text"
                placeholder={"TextField"}
            />
        </>
    );

}

export default TextField;
