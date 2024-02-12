import img1 from "../../images/img.png"
import AddToCartButton from "../AddToCartButton";
import BookmarkButton from "../BookmarkButton";
import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const ingredientCardVariant = cva("rounded-lg", {
    variants: {
        variant: {
            ingredient: [
                "bg-greyscale-100 text-greyscale-300 pl-4 py-2 text-ingredientName w-large rounded-lg shadow-cardShadow",
            ],
            recipe: [
                "bg-greyscale-100 text-greyscale-300 pl-12 py-2 text-ingredientName w-large rounded-lg shadow-cardShadow",
            ],
        },
    },
    defaultVariants: {
        variant: "ingredient",
    },
});

interface IngredientCardInterface extends VariantProps<typeof ingredientCardVariant> {
    name: string,
    price: number,
    pricePerKG: number,
    img: string,
    time: string,
    difficulty: string,
}

const IngredientCard = ({name='name', price=0, pricePerKG=0, img = img1, time='30 min', difficulty='Easy', variant}: IngredientCardInterface) => {

    return (
        <>
            <div className={"h-68 w-44 bg-secondary-10 rounded-2xl shadow-cardShadow p-4 flex flex-col"}>
                <div className="flex h-36 w-36 mb-1.5 rounded-2xl bg-cover justify-end bg-center p-2" style={{ backgroundImage: `url(${img})` }} >
                    <BookmarkButton size={32}></BookmarkButton>
                </div>
                <div className="font-SFProText text-ingredientName">{name}</div>
                <div className={"mb-3 "}>
                    { variant === "ingredient" ?
                        <div>$ {pricePerKG} per kg</div>
                        :
                        <div className="flex items-center gap-3">
                            <div>
                                <div className="flex items-center text-sm">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0212 14.9609C7.30143 14.9609 5.04069 12.7002 5.04069 9.98047C5.04069 7.25586 7.29655 5 10.0163 5C12.7409 5 15.0016 7.25586 15.0016 9.98047C15.0016 12.7002 12.7458 14.9609 10.0212 14.9609ZM10.0212 14.1309C12.3258 14.1309 14.1715 12.2852 14.1715 9.98047C14.1715 7.67578 12.321 5.83008 10.0163 5.83008C7.71159 5.83008 5.87565 7.67578 5.87565 9.98047C5.87565 12.2852 7.71647 14.1309 10.0212 14.1309ZM7.46745 10.5078C7.27214 10.5078 7.12565 10.3613 7.12565 10.166C7.12565 9.97559 7.27214 9.8291 7.46745 9.8291H9.67936V6.875C9.67936 6.68457 9.82585 6.53809 10.0163 6.53809C10.2067 6.53809 10.3581 6.68457 10.3581 6.875V10.166C10.3581 10.3613 10.2067 10.5078 10.0163 10.5078H7.46745Z" fill="#5D5D5D"/>
                                    </svg>
                                    {time}
                                </div>
                            </div>
                            <div>
                                { difficulty === "Easy" ?
                                    <div className="flex items-center text-sm">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.98 14.96C7.26053 14.96 5 12.6995 5 9.98C5 7.25565 7.25565 5 9.97512 5C12.6995 5 14.96 7.25565 14.96 9.98C14.96 12.6995 12.7044 14.96 9.98 14.96Z" fill="#57C45B"/>
                                        </svg>
                                        Easy
                                    </div>
                                    : difficulty === "Medium" ?
                                        <div className="flex items-center text-sm">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.98 14.96C7.26053 14.96 5 12.6995 5 9.98C5 7.25565 7.25565 5 9.97512 5C12.6995 5 14.96 7.25565 14.96 9.98C14.96 12.6995 12.7044 14.96 9.98 14.96Z" fill="#F4D63A"/>
                                            </svg>
                                            Medium
                                        </div>
                                        :
                                        <div className="flex items-center text-sm">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.98 14.96C7.26053 14.96 5 12.6995 5 9.98C5 7.25565 7.25565 5 9.97512 5C12.6995 5 14.96 7.25565 14.96 9.98C14.96 12.6995 12.7044 14.96 9.98 14.96Z" fill="#FB3636"/>
                                            </svg>
                                            Hard
                                        </div>
                                }
                            </div>
                        </div>
                    }


                </div>
                <div className="flex flex-row justify-between">
                    <div className={" mr-8 font-SFProText text-ingredientsCard"}>$ {price}</div>
                    <AddToCartButton size={40}/>
                </div>
            </div>
        </>
    );

}

export default IngredientCard;
