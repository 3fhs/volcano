import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselClubLogo.css"; // تأكد من استيراد ملف CSS الخاص بالكاروسيل
import { data } from "../../Data"; // تأكد من وجود البيانات

function CarouselClubLogo() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselClubLogo;
