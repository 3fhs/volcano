import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Players from "./pages/players/Players";
import AllNews from "./pages/news/AllNews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </div>
  );
}

export default App;
