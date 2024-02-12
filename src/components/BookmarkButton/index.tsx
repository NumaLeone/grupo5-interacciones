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
                className='flex items-center p-1 rounded-full bg-greyscale-100'
                onClick={handleClick}
                style={{
                    width: 'fit-content',  // Se adapta al contenido en el eje X
                    height: 'fit-content', // Se adapta al contenido en el eje Y
                }}
            >
                <BookmarkIcon checked={isClicked} size={size} color={"text-primary-500"}/>
            </button>
        </>)

}


export default BookmarkButton;
