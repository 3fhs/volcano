import React from "react";

function Title({ title }) {
  return (
    <div className="header-title bg-[brown] p-2 rounded-md">
      <h2 className="text-white font-bold text-2xl">{title}</h2>
    </div>
  );
}

export default Title;
