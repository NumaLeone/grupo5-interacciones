import HomeIcon from "../../icons/navbar/HomeIcon";
import SearchIcon from "../../icons/navbar/SearchIcon";
import CartIcon from "../../icons/navbar/CartIcon";
import AccountIcon from "../../icons/navbar/AccountIcon";
import {useState} from "react";
import Typography from "../Typography";

const Navbar = ()=>{
    const size = 32;
    const [selectedItem, setSelectedItem] = useState("Search")

    const handleItemClick = (itemName : string) => {
        setSelectedItem(itemName)
    }

    return(
        <div className="flex  items-center justify-between bg-greyscale-translucid p-4 h-full pl-7 pr-7 pb-10">
            <div className="flex flex-col items-center cursor-pointer" onClick={() => {handleItemClick("Home")}}>
                <HomeIcon checked={selectedItem === "Home"} size={size}/>
                <h2 className={`mt-1 text-${selectedItem === "Home" ? 'primary-500' : 'white'} text-navBar`} > Home </h2>
            </div>
            <div className="flex flex-col items-center cursor-pointer" onClick={() => {handleItemClick("Search")}}>
                <SearchIcon checked={selectedItem === "Search"} size={size}/>
                <h2 className={`mt-1 text-${selectedItem === "Search" ? 'primary-500' : 'white'} text-navBar`} > Search </h2>
            </div>
            <div className="flex flex-col items-center cursor-pointer" onClick={() => {handleItemClick("Cart")}}>
                <CartIcon checked={selectedItem === "Cart"} size={size} />
                <h2 className={`mt-1 text-${selectedItem === "Cart" ? 'primary-500' : 'white'} text-navBar`} > Cart </h2>
            </div>
            <div className="flex flex-col items-center cursor-pointer" onClick={() => {handleItemClick("Account")}}>
                <AccountIcon checked={selectedItem === "Account"} size={size} />
                <Typography variantType={"h2"} variantWeight={"normal"} className={`mt-1 text-${selectedItem === "Account" ? 'primary-500' : 'white'} text-navBar`} > My Account </Typography>
            </div>
        </div>
    )
}

export default Navbar;
