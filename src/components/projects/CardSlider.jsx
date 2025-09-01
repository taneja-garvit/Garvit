import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "src/components/projects/Slide";

import {PROJECTS} from "lib/constants/projectList";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const NextArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <button
      className="!flex !items-center !justify-center !w-14 !h-14 !rounded-full !bg-gradient-to-br !from-blue-400 !to-purple-500 !text-white !shadow-lg !hover:scale-110 !hover:shadow-xl !focus:outline-none !focus:ring-4 !focus:ring-purple-300 !transition-all !duration-200 !text-3xl !absolute !top-1/2 !-translate-y-1/2 !right-[-5rem] md:!right-[-4rem] lg:!right-[-3.5rem] xl:!right-[-5rem] 2xl:!right-[-7rem] z-20"
      style={{...style}}
      onClick={onClick}
      aria-label="Next Slide"
      type="button"
    >
      <FaChevronRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <button
      className="!flex !items-center !justify-center !w-14 !h-14 !rounded-full !bg-gradient-to-br !from-blue-400 !to-purple-500 !text-white !shadow-lg !hover:scale-110 !hover:shadow-xl !focus:outline-none !focus:ring-4 !focus:ring-blue-300 !transition-all !duration-200 !text-3xl !absolute !top-1/2 !-translate-y-1/2 !left-[-5rem] md:!left-[-4rem] lg:!left-[-3.5rem] xl:!left-[-5rem] 2xl:!left-[-7rem] z-20"
      style={{...style}}
      onClick={onClick}
      aria-label="Previous Slide"
      type="button"
    >
      <FaChevronLeft />
    </button>
  );
};

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1032,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="w-full flex">
      {PROJECTS.map((project) => (
        <Slide key={project.title} {...project} />
      ))}
    </Slider>
  );
};

export default CardSlider;
