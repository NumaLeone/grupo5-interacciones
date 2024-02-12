import {useState} from "react";

interface FilterButtonInterface {
    text: string,
}

const FilterButton = ({text='Filter'}: FilterButtonInterface) => {

    const [isClicked, setIsClicked] = useState(false);

    const extraStyles = isClicked ? "bg-primary-500 text-white border border-primary-500" : "bg-white text-primary-500 border border-primary-500"

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            <button
                className={`h-9 rounded-md py-0 px-2 ${extraStyles}`}
                onClick={handleClick}
            >
                {text}
            </button>
        </>
    )

}
export default FilterButton;
