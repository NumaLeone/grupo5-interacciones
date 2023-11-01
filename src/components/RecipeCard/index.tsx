import addToCartButton from "../AddToCartButton";
import AddToCartButton from "../AddToCartButton";
import BookmarkButton from "../BookmarkButton";
interface RecipeCardInterface {
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

const RecipeCard = ({name, price, pricePerKG, saved = false, img}: RecipeCardInterface) => {


    return (
        <>
            <div className="h-64 w-64 relative">
                <div className="h-64 w-64 bg-secondary-10 rounded-2xl shadow-cardShadow p-4 flex flex-col relative">
                    <div style={{ backgroundImage: `url(${img})` }} className="absolute inset-0 bg-cover"></div>
                    <div className="absolute inset-0 rounded-2xl bg-opacity-50 bg-black"></div>
                    <div className="relative z-10">
                        <BookmarkButton size={32} checked={false} onClick={handleClick}></BookmarkButton>
                    </div>
                    <div className="relative z-10 text-white">{name}</div>
                    <div className="relative z-10 mb-3 text-white">{pricePerKG} per kg</div>
                    <div className="relative z-10 flex flex-row text-white">
                        <div className="mr-8">$ {price}</div>
                        <AddToCartButton />
                    </div>
                </div>
            </div>
        </>
    );

}

export default RecipeCard;
