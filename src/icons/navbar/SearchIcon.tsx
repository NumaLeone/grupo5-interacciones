import {NavBarIcon} from "../NavBarIcon";

const SearchIcon = ({checked, size}: NavBarIcon) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            //className={checked ? "text-primary-500" : "text-greyscale-100"}
            fill="currentColor"
        >
            <path
                d="M2 10.1727C2 5.66466 5.69807 2 10.2472 2C14.7964 2 18.4944 5.66466 18.4944 10.1727C18.4944 11.9297 17.9169 13.5562 16.9544 14.8715L21.5846 19.4699C21.8582 19.751 22 20.1225 22 20.5241C22 21.3574 21.382 22 20.5208 22C20.1256 22 19.7305 21.8695 19.4468 21.5783L14.7862 16.9598C13.4894 17.8333 11.9392 18.3454 10.2472 18.3454C5.69807 18.3454 2 14.6807 2 10.1727ZM4.14792 10.1727C4.14792 13.506 6.87335 16.2169 10.2472 16.2169C13.6109 16.2169 16.3465 13.506 16.3465 10.1727C16.3465 6.83936 13.6109 4.12851 10.2472 4.12851C6.87335 4.12851 4.14792 6.83936 4.14792 10.1727Z"
                 fill={checked ? '#549E83' : '#EBEBEB'}
            />
        </svg>
    )
}
export default SearchIcon
