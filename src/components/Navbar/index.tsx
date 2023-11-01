import HomeIcon from "../../icons/navbar/HomeIcon";
import SearchIcon from "../../icons/navbar/SearchIcon";
import CartIcon from "../../icons/navbar/CartIcon";
import AccountIcon from "../../icons/navbar/AccountIcon";
import {useState} from "react";

const Navbar = ()=>{
    const size = 32;
    const [selectedItem, setSelectedItem] = useState("Search")

    const handleItemClick = (itemName : string) => {
        setSelectedItem(itemName)
    }

    return(
        <div className="flex  items-center justify-between bg-secondary-95 p-4 h-full pl-7 pr-7 pb-10">
            <div className="flex flex-col items-center" onClick={() => {handleItemClick("Home")}}>
                <HomeIcon checked={selectedItem === "Home"} size={size}/>
                <h2 className={`mt-1 text-${selectedItem === "Home" ? 'primary-100' : 'white'} font-SFProText text-navBar`} > Home </h2>
            </div>
            <div className="flex flex-col items-center" onClick={() => {handleItemClick("Search")}}>
                <SearchIcon checked={selectedItem === "Search"} size={size}/>
                <h2 className={`mt-1 text-${selectedItem === "Search" ? 'primary-100' : 'white'} font-SFProText text-navBar`} > Search </h2>
            </div>
            <div className="flex flex-col items-center" onClick={() => {handleItemClick("Cart")}}>
                <CartIcon checked={selectedItem === "Cart"} size={size} />
                <h2 className={`mt-1 text-${selectedItem === "Cart" ? 'primary-100' : 'white'} font-SFProText text-navBar`} > Cart </h2>
            </div>
            <div className="flex flex-col items-center" onClick={() => {handleItemClick("Account")}}>
                <AccountIcon checked={selectedItem === "Account"} size={size} />
                <h2 className={`mt-1 text-${selectedItem === "Account" ? 'primary-100' : 'white'} font-SFProText text-navBar`} > My Account </h2>
            </div>
        </div>
    )
}

export default Navbar;
