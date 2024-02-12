import {useState} from "react";

interface SwitchRegisterLoginProps {
    size: number
}

const SwitchRegisterLogin = ({size=400}: SwitchRegisterLoginProps) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClickRegister = () => {
        setIsClicked(true);
    };

    const handleClickLogin = () => {
        setIsClicked(false);
    };

return (
    <>
        <div
            className="bg-greyscale-100 p-0.5 flex items-center justify-between rounded-lg"
            style={{width: size}}
        >
            <button
                className={`rounded-lg pt-0.5 pb-0.5 ${isClicked ? 'bg-greyscale-white font-bold shadow-switchShadow' : 'bg-transparent'}`}
                style={{width: size / 2}}
                onClick={handleClickRegister}
            >
                Register
            </button>
            <button
                className={`rounded-lg pt-0.5 pb-0.5 ${!isClicked ? 'bg-greyscale-white font-bold shadow-switchShadow' : 'bg-transparent'}`}
                style={{width: size / 2}}
                onClick={handleClickLogin}
            >
                Login
            </button>
        </div>
    </>
)

}

export default SwitchRegisterLogin;

