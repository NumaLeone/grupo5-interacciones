import React, {useState} from "react";
import BookmarkIcon from "../../icons/BookmarkIcon";

interface BookmarkButtonProps {
    size: number
}

const BookmarkButton = ({size=40}: BookmarkButtonProps) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            <button
                className='p-1 rounded-full bg-greyscale-100'
                onClick={handleClick}
            >
                <BookmarkIcon checked={isClicked} size={size} color={"text-primary-500"}/>
            </button>
        </>)

}


export default BookmarkButton;
