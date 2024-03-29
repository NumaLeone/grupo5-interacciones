import Button from "../../components/Button";
import BookmarkButton from "../../components/BookmarkButton";
import FilterButton from "../../components/FilterButton";
import IngredientCard from "../../components/IngredientCard";
import img from "../../images/img.png";
import Navbar from "../../components/Navbar";
import Typography from "../../components/Typography";
import RecipeCard from "../../components/RecipeCard";
import TextField from "../../components/TextField";

const DesignSystem = () => {
  const handleClick = () => {
    console.log(1);
    return 1;
  };
  return (
    <>
      <div className={"mb-2"}>
        <Button variant={"outlined"} text={"Button"} />
      </div>
      <div className={"mb-2"}>
        <Button variant={"fulfilled"} text={"Button"} />
      </div>
      <div className={"mb-2"}>
        <BookmarkButton size={24}></BookmarkButton>
      </div>
      <div className={"mb-2"}>
        <BookmarkButton size={32}></BookmarkButton>
      </div>
      <div className={"mb-2"}>
        <TextField text={"Text..."} />
      </div>
      <div className={"mb-2"}>
        <FilterButton text={"Selected"} />
      </div>
      <div className={"mb-2"}>
        <FilterButton text={"Unselected"} />
      </div>
      <div className={"mb-40"}>
        <IngredientCard
          name={"name"}
          price={100}
          pricePerKG={1}
          img={img}
          variant={"ingredient"}
          time={"30min"}
          difficulty={"Easy"}
        />
      </div>
      {/*<div className={"mb-10"}>*/}
      {/*    <RecipeCard name={"[Recipe name]"} time={"30 mins"} steps={"4 steps"} img={img}/>*/}
      {/*</div>*/}
      <div className={"mb-2"}>
        <Typography type={"h1"} weight={"normal"}>
          Hola
        </Typography>
        <Typography type={"body1"} weight={"normal"}>
          Hola
        </Typography>
        <Typography type={"body2"} weight={"normal"}>
          Hola
        </Typography>
      </div>
      <div className={"mb-2"}>
        <Navbar />
      </div>
    </>
  );
};

export default DesignSystem;
