import React from "react";
import Title from "../titleInHead/Title";
import { players } from "../../Data";
import ProgressBar from "@ramonak/react-progress-bar";
import "./SpecialPlayer.css";

function SpecialPlayer() {
  return (
    <div className="pt-14 pb-14 pl-7 pr-7">
      <Title title=" افضل اللاعبين لدينا " />
      <div className="players items-start pt-5 flex flex-wrap gap-10 justify-around">
        {players.map((item, index) => (
          <div
            key={index}
            className="player rounded-xl overflow-hidden max-w-[600px] flex bg-[#410b0b] text-whight p-2 flex-col sm:flex-col md:flex-row "
          >
            <div className="img-name text-center ">
              <img
                className="md:max-w-[350px] w-[200px] h-[300px]"
                src={item.image}
                alt="player"
              />
              <div className="img-info pt-3">
                <h2 className="font-bold text-xl text-white pb-4">
                  {" "}
                  {item.name}{" "}
                </h2>
                <div className="pb-5 flex items-center gap-3 justify-around">
                  <span className="text-white"> {item.evaluation.title} </span>
                  <span className="text-[gold] flex items-center gap-1">
                    {item.evaluation.start}
                  </span>
                </div>
              </div>
            </div>
            <div className="player-info pb-14 p-2 flex flex-col items-center text-white relative min-w-[165px]">
              <h2 className="text-center pb-5 border-b-2 border-b-[#ffd700]">
                {" "}
                المهارات{" "}
              </h2>
              <div className="skills flex w-full flex-col pt-3">
                {item.skills.map((skill, index) => (
                  <div key={index} className="pb-4 flex flex-col gap-3 w-full">
                    <h4> {skill.name} </h4>
                    <ProgressBar
                      completed={skill.percentage}
                      maxCompleted={100}
                      bgColor="#981e00"
                      height="20px"
                      className="skill-progress-bar"
                    />
                  </div>
                ))}
              </div>
              <button className="absolute bottom-5 font-bold text-xl text-[gold] cursor-pointer">
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
