import addToCartButton from "../AddToCartButton";
import AddToCartButton from "../AddToCartButton";
import BookmarkButton from "../BookmarkButton";
interface IngredientCardInterface {
    name: string,
    price: number,
    pricePerKG: number,
    saved?: boolean,
    img: string
}

const handleClick = () =>{
    console.log(1)
    return 1
}

const IngredientCard = ({name, price, pricePerKG, saved = false, img}: IngredientCardInterface) => {

    return (
        <>
            <div className={"h-64 w-44 bg-secondary-10 rounded-2xl shadow-cardShadow p-4 flex flex-col"}>
                <div className="flex h-36 w-36 mb-1.5 rounded-2xl bg-cover justify-end bg-center p-2" style={{ backgroundImage: `url(${img})` }} >
                    <BookmarkButton size={32} checked={saved} onClick={handleClick}></BookmarkButton>
                </div>
                <div className="font-SFProText text-ingredientName">{name}</div>
                <div className={"mb-3 "}>$ {pricePerKG} per kg</div>
                <div className="flex flex-row justify-between">
                    <div className={" mr-8 font-SFProText text-ingredientsCard"}>$ {price}</div>
                    <AddToCartButton/>
                </div>
            </div>
        </>
    );

}

export default IngredientCard;
