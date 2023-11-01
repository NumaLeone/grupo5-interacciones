import React from "react";

const handleClick = () =>{
    console.log(1)
    return 1
}

const TextField = () => {


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
