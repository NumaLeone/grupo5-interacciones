import img1 from "../../images/img.png"
import AddToCartButton from "../AddToCartButton";
import BookmarkButton from "../BookmarkButton";
interface IngredientCardInterface {
    name: string,
    price: number,
    pricePerKG: number,
    img: string
}

const IngredientCard = ({name='name', price=0, pricePerKG=0, img = img1}: IngredientCardInterface) => {

    return (
        <>
            <div className={"h-68 w-44 bg-secondary-10 rounded-2xl shadow-cardShadow p-4 flex flex-col"}>
                <div className="flex h-36 w-36 mb-1.5 rounded-2xl bg-cover justify-end bg-center p-2" style={{ backgroundImage: `url(${img})` }} >
                    <BookmarkButton size={32}></BookmarkButton>
                </div>
                <div className="font-SFProText text-ingredientName">{name}</div>
                <div className={"mb-3 "}>$ {pricePerKG} per kg</div>
                <div className="flex flex-row justify-between">
                    <div className={" mr-8 font-SFProText text-ingredientsCard"}>$ {price}</div>
                    <AddToCartButton size={40}/>
                </div>
            </div>
        </>
    );

}

export default IngredientCard;
