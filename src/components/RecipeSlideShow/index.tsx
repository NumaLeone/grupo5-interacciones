import React, { useState } from "react";
import ButterImage from "../../images/butter.jpg";
import BlackPepperImage from "../../images/black-pepper.jpg";
import ArrowPrevious from "../../icons/ArrowPrevious.svg";
import ArrowNext from "../../icons/ArrowNext.svg";

interface RecipeSlideShowProps {
  images?: string[];
}

const RecipeSlideShow: React.FC<RecipeSlideShowProps> = ({
  images = [BlackPepperImage, ButterImage],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="h-60">
      <div className="flex justify-center">
        <img
          className="w-80 h-44 rounded-2xl"
          src={images[currentIndex]}
          alt="Recipe"
        />
      </div>
      <div className="flex justify-center">
        <button onClick={handlePrevClick}>
          <img src={ArrowPrevious} alt="Previous" />
        </button>
        <button className="ml-24" onClick={handleNextClick}>
          <img src={ArrowNext} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default RecipeSlideShow;
