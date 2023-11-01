import HomeIcon from "../../icons/navbar/HomeIcon";
import SearchIcon from "../../icons/navbar/SearchIcon";
import CartIcon from "../../icons/navbar/CartIcon";
import AccountIcon from "../../icons/navbar/AccountIcon";

const RecipeCard = ()=>{
    return(<>
        <HomeIcon checked={true}/>
        <SearchIcon checked={true}/>
        <CartIcon checked={true}/>
        <AccountIcon checked={true}/>
        </>)
}

export default RecipeCard;
