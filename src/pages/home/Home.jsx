import React from "react";
import Header from "../../componentes/header/Header";
import CarouselHead from "../../componentes/carouselhead/CarouselHead";
import CarouselClubLogo from "../../componentes/carousel/CarouselClubLogo";
import News from "../../componentes/news/News";
import SpecialPlayer from "../../componentes/specialPlayer/SpecialPlayer";
import AllPlayers from "../../componentes/allPlayers/AllPlayers";
import Footer from "../../componentes/footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <CarouselHead />
      <CarouselClubLogo />
      <News />
      <SpecialPlayer />
      <AllPlayers />
      <Footer />
    </div>
  );
}

export default Home;
