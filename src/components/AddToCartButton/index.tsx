import {useState} from "react";
const AddToCartButton = ()=>{

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

return (
    <>
        <button
            className={`rounded-full ${isClicked ? 'bg-secondary-40' : 'bg-primary-100'}`}
            onClick={handleClick}
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className='p-0.5 text-secondary-10'
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.7932 11.2126C15.0319 11.2126 13.5863 9.81844 13.5863 8.1063C13.5863 6.4064 15.0319 5 16.7932 5C18.5481 5 20 6.4064 20 8.1063C20 9.80621 18.5292 11.2126 16.7932 11.2126ZM8.13219 15.0282C7.21686 15.0282 6.74341 14.484 6.61084 13.6157L5.60082 6.90169H3.46714C3.21463 6.90169 3 6.68768 3 6.43697C3 6.19238 3.21463 5.97836 3.46714 5.97836H5.68288C6.32677 5.97836 6.50353 6.21684 6.56665 6.68768L6.68659 7.46425H12.7657C12.7215 7.73942 12.7026 8.1063 12.7341 8.38758H6.82547L7.36205 11.9341L14.912 11.928C15.0887 11.928 15.2087 11.873 15.3034 11.7507C15.7768 11.9525 16.2882 12.0564 16.831 12.0564C16.5912 12.5823 16.1682 12.8514 15.5117 12.8514H7.50093L7.60193 13.4934C7.65875 13.8664 7.87969 14.111 8.23951 14.111H15.4991C15.7453 14.111 15.9599 14.3067 15.9599 14.5696C15.9599 14.8325 15.7453 15.0282 15.4991 15.0282H8.13219ZM16.7932 10.0569C17.0267 10.0569 17.1782 9.90405 17.1782 9.6778V8.48542H18.4092C18.6428 8.48542 18.8006 8.33866 18.8006 8.1063C18.8006 7.88006 18.6428 7.7333 18.4092 7.7333H17.1782V6.54092C17.1782 6.31468 17.0267 6.16181 16.7932 6.16181C16.5596 6.16181 16.4018 6.31468 16.4018 6.54092V7.7333H15.1708C14.9372 7.7333 14.7857 7.88006 14.7857 8.1063C14.7857 8.33866 14.9372 8.48542 15.1708 8.48542H16.4018V9.6778C16.4018 9.90405 16.5596 10.0569 16.7932 10.0569ZM8.6309 18C8.05644 18 7.60193 17.5659 7.60193 17.0094C7.60193 16.4591 8.05644 16.0188 8.6309 16.0188C9.19903 16.0188 9.65355 16.4591 9.65355 17.0094C9.65355 17.5659 9.19903 18 8.6309 18ZM14.5332 18C13.9651 18 13.5043 17.5659 13.5043 17.0094C13.5043 16.4591 13.9651 16.0188 14.5332 16.0188C15.1077 16.0188 15.5622 16.4591 15.5622 17.0094C15.5622 17.5659 15.1077 18 14.5332 18Z"
                />
            </svg>
        </button>
    </>
)

}

export default AddToCartButton;

