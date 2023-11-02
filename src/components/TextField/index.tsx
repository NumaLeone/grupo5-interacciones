import React from "react";
import SearchIcon from "../../icons/navbar/SearchIcon";

const TextField = (props: any) => {
    return (
        <>
            <div>
                <div className="absolute ml-2 mt-2" style={props.variant === "searchbar" ? {} : {display: "none"}}>
                    <SearchIcon checked={false} size={32} />
                </div>
                <input
                    className={"bg-secondary-10 text-secondary-40 pl-12 py-2 text-ingredientName w-large rounded-lg shadow-cardShadow"}
                    type="text"
                    placeholder={props.text}
                    // style={props.variant === "searchbar" ? {padding: "12px"} : {padding: "2px"}}
                >
                </input>
            </div>
        </>
    );
}

export default TextField;