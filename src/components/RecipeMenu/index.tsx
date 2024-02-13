import React, { useState } from "react";
import Typography from "../Typography";

enum MenuOption {
  Ingredients = "ingredients",
  Tutorial = "tutorial",
  Reviews = "reviews",
}

const RecipeMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<MenuOption>(
    MenuOption.Ingredients
  );

  const handleOptionChange = (option: MenuOption) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="flex justify-between">
        <button onClick={() => handleOptionChange(MenuOption.Ingredients)}>
          <Typography
            type="body2"
            weight="bold"
            className={`${
              selectedOption === MenuOption.Ingredients
                ? "text-primary-500"
                : "text-greyscale-600"
            }`}
          >
            Ingredients
          </Typography>
        </button>
        <button onClick={() => handleOptionChange(MenuOption.Tutorial)}>
          <Typography
            type="body2"
            weight="bold"
            className={`${
              selectedOption === MenuOption.Tutorial
                ? "text-primary-500"
                : "text-greyscale-600"
            }`}
          >
            Tutorial
          </Typography>
        </button>
        <button onClick={() => handleOptionChange(MenuOption.Reviews)}>
          <Typography
            type="body2"
            weight="bold"
            className={`${
              selectedOption === MenuOption.Reviews
                ? "text-primary-500"
                : "text-greyscale-600"
            }`}
          >
            Reviews
          </Typography>
        </button>
      </div>
    </div>
  );
};
export default RecipeMenu;
