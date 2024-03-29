import BookmarkButton from "../BookmarkButton";
interface RecipeCardInterface {
    name: string,
    time: string,
    steps: string,
    img: string
}

const handleClick = () =>{
    console.log(1)
    return 1
}

const RecipeCard = ({name='[Recipe name]', time='30 mins', steps='4 steps', img}: RecipeCardInterface) => {


    return (
        <>
            <div className="h-64 w-64 relative">
                <div className="h-64 w-64 bg-secondary-10 rounded-2xl shadow-cardShadow p-4 flex flex-col relative cursor-pointer">
                    <div style={{ backgroundImage: `url(${img})` }} className="absolute inset-0 bg-cover"></div>
                    <div className="absolute inset-0 rounded-2xl bg-opacity-50 bg-black"></div>
                    <div className="relative z-10 justify-end flex">
                        <BookmarkButton size={32}></BookmarkButton>
                    </div>
                    <div className="relative text-xl z-10 text-white mt-28 flex align-bottom">{name}</div>
                    <div className="relative z-10 text-white mt-1 flex gap-5">
                        <div className="relative z-10 text-white mt-1 flex ">
                            {time}
                        </div>
                        <div className="relative z-10 text-white mt-1 flex ">
                            {steps}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default RecipeCard;
