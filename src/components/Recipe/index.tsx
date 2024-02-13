import React from "react";
import RecipeTitle from "../RecipeTitle";
import RecipeSlideShow from "../RecipeSlideShow";
// import PlaceholderImage from "../../images/img.png";
import RecipeMenu from "../RecipeMenu";
// import ButterImage from "../../images/butter.jpg";
import RecipeTimeDifficulty from "../RecipeTimeDifficulty";

interface RecipeProps {
  recipeTitle: string;
  // recipeIngredients: string[];
}

const Recipe: React.FC<RecipeProps> = ({ recipeTitle }) => {
  return (
    <div className="p-5">
      <RecipeTitle title={"title"} foodName={"foodname"} />
      <RecipeTimeDifficulty time={30} timeUnit="Min." difficulty={"Easy"} />
      <RecipeSlideShow />
      <RecipeMenu />
      {/* <ul>
                {recipeIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul> */}
      {/* <button>Start Cooking</button> */}
    </div>
  );
};

export default Recipe;
