import React from "react";
import Title from "../titleInHead/Title";
import ProgressBar from "react-progressbar";
import { players } from "../../Data";

function SpecialPlayer() {
  return (
    <div className="pt-14 pb-14 pl-7 pr-7">
      <Title title=" افضل اللاعبين لدينا " />
      <div className="players pt-5 flex flex-wrap gap-10 justify-between md:justify-around">
        {players.map((item) => (
          <div className="player max-w-[600px] flex bg-[#410b0b] text-whight gap-4 flex-col sm:flex-col md:flex-row">
            <img
              className="md:max-w-[350px] sm:w-full w-full"
              src={item.image}
              alt="player"
            />
            <div className="player-info p-2 flex flex-col items-center text-white relative">
              <h2 className="font-bold text-xl pb-4"> {item.name} </h2>
              <div className="pb-5 flex items-center gap-3">
                <span> {item.evaluation.title} </span>
                <span className="text-[gold] flex items-center gap-1">
                  نجوم {item.evaluation.start}
                </span>
              </div>
              <p className="text-base text-[#999] pb-12">{item.details}</p>
              <div className="skills">
                <h4> {item.skills.name} </h4>
                <ProgressBar
                  completed={item.skills.percentage}
                  maxCompleted={100}
                  bgColor="#4caf50"
                  height="20px"
                  className="skill-progress-bar"
                />
              </div>
              <button className="absolute left-5 bottom-5 font-bold text-xl text-[#ffffd1] cursor-pointer">
                {" "}
                المزيد عن اللاعب{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialPlayer;
