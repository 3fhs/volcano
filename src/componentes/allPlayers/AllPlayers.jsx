import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { players } from "../../Data";
import Title from "../titleInHead/Title";
import "./allplayers.css";
import CardPlayer from "./CardPlayer";

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
            <CardPlayer key={index} player={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AllPlayers;
