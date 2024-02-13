import React from "react";
import Typography from "../Typography";
import BookmarkButton from "../BookmarkButton";
import AddToCartButton from "../AddToCartButton";

interface RecipeTitleProps {
  title: string;
  foodName: string;
}

const RecipeTitle: React.FC<RecipeTitleProps> = ({
  title = "Recipe",
  foodName = "[Food name]",
}) => {
  //   const handleBookmark = () => {
  //     // TODO: Implement bookmark functionality
  //   };

  //   const handleAddToCart = () => {
  //     // TODO: Implement add to cart functionality
  //   };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <Typography type="h1" weight="bold">
          {title}
        </Typography>
        <Typography type="h3" weight="bold" className="text-greyscale-400">
          {foodName}
        </Typography>
      </div>
      <div className="flex flex-row">
        <BookmarkButton size={28} className="bg-transparent" />
        <AddToCartButton
          fontColor="text-primary-500"
          className="bg-transparent text-primary-500"
          size={35}
        />
      </div>
    </div>
  );
};

export default RecipeTitle;
