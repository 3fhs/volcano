import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-slice">coby@ reight by Volcano Academy</div>
      <div className="footer-cool bg-[#270101]">
        <div className="cool">
          <h3> التواصل </h3>
          <div className="cool-info">
            <span>
              {" "}
              العنوان : 13 شارع الصفوان متفرع من جامع الكرات جنب الحيط مدرج 3
              مقعد 10{" "}
            </span>
            <span> تليفون / 01012345678910 </span>
          </div>
        </div>
        <div className="cool-sub">
          <h3> الاقسام </h3>
          <div className="">
            <ul className="footer-links">
              <li className="footer-link"> الرئيسية </li>
              <li className="footer-link"> من نحن </li>
              <li className="footer-link"> اخبارنا </li>
              <li className="footer-link"> اللاعبين </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
