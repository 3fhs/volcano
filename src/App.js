import "./App.css";
import AllPlayers from "./componentes/allPlayers/AllPlayers.jsx";
import CarouselClubLogo from "./componentes/carousel/CarouselClubLogo";
import CarouselHead from "./componentes/carouselhead/CarouselHead";
import Footer from "./componentes/footer/Footer.jsx";
import Header from "./componentes/header/Header";
import News from "./componentes/news/News.jsx";
import SpecialPlayer from "./componentes/specialPlayer/SpecialPlayer.jsx";

function App() {
  return (
    <div className="App">
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

export default App;
