import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-slice">coby@ reight by Volcano Academy</div>
      <div className="footer-cool bg-[#270101] flex-col md:flex-row">
        <div className="cool">
          <h3> التواصل </h3>
          <div className="cool-info bg-[brown] py-5 px-3 rounded-md">
            <span>
              {" "}
              العنوان : 13 شارع الصفوان متفرع من جامع الكرات جنب الحيط مدرج 3
              مقعد 10{" "}
            </span>
            <span> تليفون / 01012345678910 </span>
          </div>
        </div>
        <div className="cool-sub w-full md:w-2/4">
          <h3> الاقسام </h3>
          <div className="">
            <ul className="footer-links bg-[brown] py-5 px-3 rounded-md">
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
