import Button from "../../components/Button";
import BookmarkButton from "../../components/BookmarkButton";
import FilterButton from "../../components/FilterButton";
import IngredientCard from "../../components/IngredientCard";
import img from '../../icons/img.png'

const DesignSystem = () => {

    const handleClick = () =>{
        console.log(1)
       return 1
    }
  return (
    <>
        <div className={"mb-2"}>
      <Button variant={"outlined"}>Outlined</Button>
        </div>
        <div className={"mb-2"}>
      <Button variant={"fulfilled"}>Fulfilled</Button>
        </div>
        <div className={"mb-2"}>
           <BookmarkButton size={24} checked={true} onClick={handleClick}></BookmarkButton>
        </div>
        <div className={"mb-2"}>
            <BookmarkButton size={32} checked={false} onClick={handleClick}></BookmarkButton>
        </div>
        <div className={"mb-2"}>
            <FilterButton text={"Selected"} selected={true} />
        </div>
        <div className={"mb-2"}>
            <FilterButton text={"Unselected"} selected={false} />
        </div>
        <div className={"mb-2"}>
            <IngredientCard name={"name"} price={100} pricePerKG={1} img={img}/>
        </div>
    </>
  );
};

export default DesignSystem;
