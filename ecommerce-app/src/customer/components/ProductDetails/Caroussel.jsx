import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button, IconButton } from "@mui/material";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Caroussel = ({subCategory, productsData}) => {
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    subcategory:`${subCategory}`,
    sortByPrice: -1,
    sortByDate: -1,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const responsive = {
    0: { items: 1 },
    850: { items: 2 },
    1020:{ items: 3 },
    1200: { items: 4 },
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
  console.log(productsData);
  const items = productsData.map((product, index) => (
    <div key={index} className="flex justify-center">
        <ProductCard product={product} />
    </div>
  ));

  return (
    <div className="relative border bg-white">
    <div className="flex items-center justify-between w-full px-6 py-5">
      <h2 className="text-2xl font-extrabold text-gray-800  ">Similar Items</h2>
      
    </div>
      <div className="p-5">
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
