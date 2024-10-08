import React, { useState } from "react";
import "./header.css";
import volcano from "../../image/football_logo_volcanoes.png";
import { Link } from "react-router-dom";

function Header() {
  const [openLink, setOpenLink] = useState(false);

  return (
    <div className="header">
      <div className="head-nav">
        <div className="nav-logo">
          <img className="volcan" src={volcano} alt="volcano" />
        </div>
        <div
          className="nav-links"
          style={{
            clipPath: openLink && "polygon(20% 0%, 80% 0%, 100% 100%, 0 100%)",
          }}
        >
          <ul className="flex items-center flex-col gap-5 sm:flex-col md:flex-row">
            <Link
              to="/"
              onClick={() => setOpenLink(false)}
              className="nav-link"
            >
              {" "}
              الرئيسية{" "}
            </Link>
            <Link
              to="/about"
              onClick={() => setOpenLink(false)}
              className="nav-link"
            >
              {" "}
              من نحن{" "}
            </Link>
            <Link
              to="/news"
              onClick={() => setOpenLink(false)}
              className="nav-link"
            >
              {" "}
              اخبارنا{" "}
            </Link>
            <Link
              to="/players"
              onClick={() => setOpenLink(false)}
              className="nav-link"
            >
              {" "}
              اللاعبين{" "}
            </Link>
          </ul>
          <ul className="flex items-center gap-5 pt-2 md:pt-0 flex-col sm:flex-col md:flex-row">
            <li onClick={() => setOpenLink(false)} className="nav-link">
              {" "}
              تسجيل الدخول{" "}
            </li>
            <li onClick={() => setOpenLink(false)} className="nav-link">
              {" "}
              الخروج{" "}
            </li>
          </ul>
        </div>

        <div onClick={() => setOpenLink((prev) => !prev)} className="">
          {openLink ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
