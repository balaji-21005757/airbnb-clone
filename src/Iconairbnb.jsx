import React from 'react';
import Slider from 'react-slick';
import { FaHome, FaRegStar, FaMountain, FaSwimmer, FaTree, FaUmbrellaBeach, FaUtensils, FaCity } from 'react-icons/fa';
import { BsTicket } from "react-icons/bs";
import { GiIsland, GiCampingTent } from "react-icons/gi";
import './Iconairbnb.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const IconCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const icons = [
    { icon: <BsTicket size={25} />, label: 'Icons' },
    { icon: <GiIsland size={25} />, label: 'Island' },
    { icon: <FaMountain size={25} />, label: 'Mountains' },
    { icon: <FaSwimmer size={25} />, label: 'Swimming' },
    { icon: <FaTree size={25} />, label: 'Nature' },
    { icon: <FaUmbrellaBeach size={25} />, label: 'Beaches' },
    { icon: <FaUtensils size={25} />, label: 'Food' },
    { icon: <GiCampingTent size={25} />, label: 'Camping' },
  ];

  return (
    <div className="icon-carousel">
      <Slider {...settings}>
        {icons.map((item, index) => (
          <div key={index} className="icon-slide">
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <MdArrowBackIos />
    </div>
  );
};

export default IconCarousel;
