import React from "react";
import RecipeClock from "../../icons/RecipeClock.svg";
import Typography from "../Typography";

type RecipeTimeDifficultyProps = {
  time: number;
  timeUnit: "Sec." | "Min." | "Hrs.";
  difficulty: "Easy" | "Medium" | "Hard";
};

const RecipeTimeDifficulty: React.FC<RecipeTimeDifficultyProps> = ({
  time = 1,
  difficulty = "Easy",
  timeUnit = "Min.",
}) => {
  let difficultyColor = "";
  switch (difficulty) {
    case "Easy":
      difficultyColor = "bg-state-success";
      break;
    case "Medium":
      difficultyColor = "bg-state-warning";
      break;
    case "Hard":
      difficultyColor = "bg-state-error";
      break;
  }

  return (
    <div className="flex flex-row justify-start items-center">
      <img src={RecipeClock} alt="Recipe clock" />
      <Typography
        type={"caption1"}
        weight="light"
      >{`${time} ${timeUnit}`}</Typography>
      <div
        className={`ml-2 ${difficultyColor}`}
        style={{
          backgroundColor: difficultyColor,
          borderRadius: "50%",
          width: "10px",
          height: "10px",
        }}
      ></div>
      <Typography className="ml-2" type={"caption1"} weight="light">
        {difficulty}
      </Typography>
    </div>
  );
};

export default RecipeTimeDifficulty;
