import {NavBarIcon} from "../NavBarIcon";


const HomeIcon = ({checked, size}: NavBarIcon) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
                d="M6.43261 22C5.18722 22 4.45801 21.1858 4.45801 19.8007V11.0875L3.51577 11.986C3.31913 12.1731 3.09791 12.3322 2.84392 12.3322C2.31954 12.3322 2 11.9204 2 11.4338C2 11.1717 2.10651 10.9003 2.31954 10.6944L10.857 2.50538C11.5698 1.83154 12.4547 1.83154 13.1594 2.50538L17.1741 6.36125V4.61114C17.1741 4.18999 17.4199 3.91858 17.7804 3.91858H18.8865C19.2552 3.91858 19.4928 4.18999 19.4928 4.61114V8.58868L21.6805 10.6944C21.8935 10.891 22 11.1437 22 11.4619C22 11.9953 21.6395 12.3322 21.1643 12.3322C20.9103 12.3322 20.6891 12.1731 20.4924 11.986L19.4928 11.0314V19.8007C19.4928 21.1858 18.7636 22 17.5182 22H6.43261ZM14.3556 14.0262V20.1657H17.0922C17.6084 20.1657 17.8869 19.8381 17.8869 19.2485V9.48713L12.3564 4.18999C12.1352 3.96537 11.8812 3.96537 11.66 4.18999L6.06391 9.54328V19.2485C6.06391 19.8381 6.34248 20.1657 6.85866 20.1657H9.63621V14.0262C9.63621 13.5863 9.8984 13.3056 10.2753 13.3056H13.7247C14.1098 13.3056 14.3556 13.5863 14.3556 14.0262Z"
                fill={checked ? '#549E83' : '#EBEBEB'}/>
        </svg>

    )
}

export default HomeIcon;










