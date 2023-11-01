import HomeIcon from "../../icons/navbar/HomeIcon";
import SearchIcon from "../../icons/navbar/SearchIcon";
import CartIcon from "../../icons/navbar/CartIcon";
import AccountIcon from "../../icons/navbar/AccountIcon";

const Navbar = ()=>{
    let checked;
    return(
        <div className="flex items-center justify-center bg-secondary-95 p-4 gap-9 h-full">
            <div className="flex flex-col items-center">
                <HomeIcon checked={checked = true}/>
                <h2 className={`mt-1 text-${checked ? 'primary-100' : 'secondary-10'} font-SFProText text-navBar`} > Home </h2>
            </div>
            <div className="flex flex-col items-center">
                <SearchIcon checked={checked = false}/>
                <h2 className={`mt-1 text-${checked ? 'primary-100' : 'secondary-10'} font-SFProText text-navBar`} > Search </h2>
            </div>
            <div className="flex flex-col items-center">
                <CartIcon checked={checked = false}/>
                <h2 className={`mt-1 text-${checked ? 'primary-100' : 'secondary-10'} font-SFProText text-navBar`} > Cart </h2>
            </div>
            <div className="flex flex-col items-center">
                <AccountIcon checked={checked = false}/>
                <h2 className={`mt-1 text-${checked ? 'primary-100' : 'secondary-10'} font-SFProText text-navBar`} > My Account </h2>
            </div>
        </div>
    )
}

export default Navbar;
