import React from "react";
import BookmarkIcon from "../../icons/BookmarkIcon";

interface BookmarkButtonProps {
    checked: boolean,
    onClick: () => {},
    size: number
}

const BookmarkButton = ({checked, onClick, size}: BookmarkButtonProps) => {
    return (
        <>
            <button onClick={onClick}><BookmarkIcon checked={checked} size={size} color={"#549E83"}/></button>
        </>)

}


export default BookmarkButton;
