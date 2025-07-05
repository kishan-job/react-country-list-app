import React, { useEffect, useState } from "react";
import "./Slider.css";
import { signIn } from "../../assets/index";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
function Slider({ setNextImgSrc }) {
  const [displayedImg, setDispalyedImg] = useState(null);
  const [index, setIndex] = useState(0);

  const displayedCountries = useSelector(
    (state) => state.countriesSlice.displayedCountries
  );

  useEffect(() => {
    if (displayedCountries.length > 0) {
      setDispalyedImg(displayedCountries[index].flag);
    }
  }, [index, displayedCountries]);

  const handelRight = () => {
    setIndex((prevIndex) =>
      prevIndex === displayedCountries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handelleft = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? displayedCountries.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="imageSlider">
      <img src={displayedImg} alt="" />
      <div className="image-slider-icons">
        <HiArrowSmLeft size={20} onClick={handelleft} />
        <div>
          <FaCircle className="circle-icon" size={10} />
          <FaCircle className="circle-icon" size={10} />
          <FaCircle className="circle-icon" size={10} />
          <FaCircle className="circle-icon" size={10} />
        </div>
        <HiArrowSmRight size={20} onClick={handelRight} />
      </div>
    </div>
  );
}

export default Slider;
