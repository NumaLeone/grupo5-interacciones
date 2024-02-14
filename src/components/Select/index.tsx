import React, {useState} from "react";
import Typography from "../Typography";
import BackArrowIcon from "../../icons/BackArrowIcon";

interface FilterButtonInterface {
    options: string[],
}

const Select = ({options=['Ingredients', 'Recipies']}: FilterButtonInterface) => {

    const [show, setShow] = React.useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    return (
        <>
            <div>
                <button className="flex justify-start gap-4 mb-6 mt-2 ml-4" onClick={() => setShow(!show)}>
                    <Typography type={"h1"} weight={"bold"}>
                        Ingredients
                    </Typography>
                    <div className="-rotate-90">
                        <BackArrowIcon size={30} fill={"black"} />
                    </div>
                </button>
                <div className="w-small ml-5 flex flex-col bg-greyscale-white rounded-lg border border-greyscale-300" style={show ? {zIndex: '100', position: 'absolute'} : {display: 'none'}}>
                    {options.map((option, index) => (
                        <div key={index}>
                            <button
                                className={`w-full bg-greyscale-white text-greyscale-600 py-2 text-base rounded-lg text-ingredientName ${
                                    selectedOption === option ? 'font-bold' : ''
                                }`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </button>
                            {index < options.length - 1 && (
                                <div className="border-b border-greyscale-300" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}
export default Select;
