import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { players } from "../../Data";
import Title from "../titleInHead/Title";

function AllPlayers() {
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pr-7 pl-7">
      <Title title=" جميع اللاعبين المسجلين لدينا " />
      <div className="pt-5 px-7 pb-28">
        <Slider
          {...settings}
          className="rounded-lg border-2 border-solid border-[black] p-3 bg-[brown]"
        >
          {players.map((item, index) => (
            <div key={index} className="bg-amber-600 rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  boxShadow: "none",
                }}
              />
              <div className="player-info p-2 flex flex-col items-center text-white relative">
                <h2 className="font-bold text-xl pb-4"> {item.name} </h2>
                <div className="pb-5 flex items-center gap-3 flex-col">
                  <span> {item.evaluation.title} </span>
                  <span className="text-[gold] flex items-center gap-1">
                    {" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>{" "}
                  </span>
                </div>
                <p className="text-base text-white pb-12">
                  {" "}
                  {item.details.slice(0, 42)} ....
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AllPlayers;
