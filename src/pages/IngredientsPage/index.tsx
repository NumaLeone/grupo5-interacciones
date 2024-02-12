import FilterButton from "../../components/FilterButton";
import IngredientCard from "../../components/IngredientCard";
import butter_img from '../../images/butter.jpg'
import sugar_img from '../../images/sugar.jpeg'
import eggs_img from '../../images/eggs.jpeg'
import honey_img from '../../images/honey.jpeg'
import msg_img from '../../images/msg.jpeg'
import black_pepper_img from '../../images/black-pepper.jpg'
import Navbar from "../../components/Navbar";
import Typography from "../../components/Typography";
import TextField from "../../components/TextField";
import BookmarkIcon from "../../icons/BookmarkIcon";
import React from "react";
import BackArrowIcon from "../../icons/BackArrowIcon";

const DesignSystem = () => {

    const handleClick = () =>{
        console.log(1)
       return 1
    }
  return (
    <>
        <div className="overflow-hidden">
            <div className="flex justify-between p-4 ">
                <button className='p-1 h-10 w-10' onClick={handleClick}>
                    <BackArrowIcon size={30} fill={"#549E83"}/>
                </button>
                <button className='p-1 h-10 w-10' onClick={handleClick}>
                    <BookmarkIcon checked={true} size={40} color={"#549E83"}/>
                </button>
            </div>
            <div className={"flex justify-start gap-4 mb-6 mt-2 ml-4"}>
                <Typography variantType={"h1"} variantWeight={"bold"}>Ingredients</Typography>
                <div className="-rotate-90">
                    <BackArrowIcon size={30} fill={"black"}/>
                </div>
            </div>
            <div className={"mb-6 flex w-full justify-center"}>
                <TextField text={"Search ingredients..."} variant={"searchbar"}/>
            </div>
            <div className={"ml-4"}>
                <Typography variantType={"h2"} variantWeight={"medium"}>Category</Typography>
            </div>

        </div>

        <div className={"mb-2 flex overflow-x-scroll p-4 gap-3"}>
            <FilterButton text={"All"}/>
            <FilterButton text={"Breakfast"}/>
            <FilterButton text={"Dinner"}/>
            <FilterButton text={"Desserts"}/>
            <FilterButton text={"Lunch"}/>
            <FilterButton text={"Keto"}/>
        </div>

        <div className={"grid grid-cols-2 gap-3 p-3"}>
            <IngredientCard name={"Butter"} price={100} pricePerKG={7.49} img={butter_img}/>
            <IngredientCard name={"Sugar"} price={100} pricePerKG={5.20} img={sugar_img}/>
            <IngredientCard name={"Eggs"} price={100} pricePerKG={1.6} img={eggs_img}/>
            <IngredientCard name={"Honey"} price={100} pricePerKG={15.9} img={honey_img}/>
            <IngredientCard name={"MSG"} price={100} pricePerKG={5} img={msg_img}/>
            <IngredientCard name={"Black Pepper"} price={100} pricePerKG={0.3} img={black_pepper_img}/>
            <IngredientCard name={"Butter"} price={100} pricePerKG={7.49} img={butter_img}/>
            <IngredientCard name={"Sugar"} price={100} pricePerKG={5.20} img={sugar_img}/>
            <IngredientCard name={"Eggs"} price={100} pricePerKG={1.6} img={eggs_img}/>
            <IngredientCard name={"Honey"} price={100} pricePerKG={15.9} img={honey_img}/>
            <IngredientCard name={"MSG"} price={100} pricePerKG={5} img={msg_img}/>
            <IngredientCard name={"Black Pepper"} price={100} pricePerKG={0.3} img={black_pepper_img}/>
        </div>
        <div className={"h-40 text-white"}></div>
        <div className={"fixed w-full bottom-0"}>
            <Navbar/>
        </div>
    </>
  );
};

export default DesignSystem;
