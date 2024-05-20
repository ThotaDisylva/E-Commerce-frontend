import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button, IconButton } from "@mui/material";
import productsData from "../ProductCard/ProductsData";
import ProductCard from "./ProductCard";

const Caroussel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
    carouselRef.current.slidePrev();
  };

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
    carouselRef.current.slideNext();
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = productsData.map((product, index) => (
    <div key={index} className="flex justify-center mr-3">
      <ProductCard product={product} />
    </div>
  ));

  return (
    <div className="relative bg-white h-full">
    <div className="flex items-center justify-between w-full px-6">
      <h2 className="text-2xl font-extrabold text-gray-800  ">Similar Items</h2>
      
    </div>
      <div className="p-5 h-full">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />
      </div>
      {activeIndex !== items.length - 5 && (
        <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "14rem",
            right: "-4rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      )}
      {activeIndex !== 0 && (<Button
        variant="contained"
        className="z-50 bg-white"
        onClick={slidePrev}
        sx={{
          position: "absolute",
          top: "14rem",
          left: "-4rem",
          transform: "translateX(50%) rotate(-90deg)",
          bgcolor: "white",
        }}
        aria-label="prev"
      >
        <KeyboardArrowRightIcon
          sx={{ transform: "rotate(-90deg)", color: "black" }}
        />
      </Button>)}
    </div>
  );
};

export default Caroussel;