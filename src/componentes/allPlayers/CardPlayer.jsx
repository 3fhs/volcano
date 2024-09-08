import React from "react";
import "./allplayers.css";

function CardPlayer({ player }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div className="player-info p-2 flex flex-col items-center text-white relative">
            <h2 className="font-bold text-xl pb-4"> {player.name} </h2>
            <div className="pb-5 flex items-center gap-3 flex-col">
              <span> {player.evaluation.title} </span>
              <span className="text-[gold] flex items-center gap-1">
                {" "}
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>{" "}
              </span>
            </div>
            <p className="text-base text-white pb-12 text-center">
              {" "}
              {player.details}
            </p>
          </div>
        </div>
        <div className="card-back">
          <img src={player.image} alt={player.name} className="back-image" />
        </div>
      </div>
    </div>
  );
}
export default CardPlayer;
