import React from "react";

const handleClick = () =>{
    console.log(1)
    return 1
}

const TextField = (props: any) => {


    return (
        <>
            <input
                className={"bg-secondary-10 text-secondary-40 px-4 py-2 text-ingredientName w-large rounded-lg shadow-cardShadow"}
                type="text"
                placeholder={props.text}
            />
        </>
    );

}

export default TextField;