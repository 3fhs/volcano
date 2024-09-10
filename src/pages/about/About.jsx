import React from "react";
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import logo from "../../image/football_logo_volcanoes.png";
import mwhptk from "../../image/mwhbtk2.jpg";
import boss from "../../image/boss-game.jpg";
import "./about.css";

function About() {
  return (
    <div>
      <Header />
      <div className="about pt-0 pb-12 px-8">
        <div className="header-about py-24 flex items-center justify-center gap-5 text-center flex-col md:flex-row sm:flex-col">
          <img
            className="w-24 h-24 border-2 border-[#deb887] rounded-3xl"
            src={logo}
            alt="logo"
          />
          <h1 className="font-bold text-4xl text-[#272424] pb-[30px] border-b-2 border-b-black rounded-xl px-2">
            {" "}
            اكاديمية البراكين لكرة القدم{" "}
          </h1>
        </div>
        <div className="about-section">
          <div className="about-info">
            <h2 className="text-[30px] font-bold text-center text-[#000] py-[30px]">
              {" "}
              عن الاكاديمية{" "}
            </h2>
            <div className="part-info bg-[brown] flex flex-col gap-10 rounded-lg">
              <img
                src={mwhptk}
                alt="volcano"
                className="w-full rounded-tl-lg rounded-tr-[50%] rounded-bl-[50%] rounded-br-lg"
              />
              <p className="text-center text-white p-5 font-normal text-xl rounded-md">
                {" "}
                تعمل الاكاديمية على اعداد و تاهيل اللاعبين من سن صغير للدخول فى
                عالم كرة القدم . كما تعمل الاكاديمية على تسويق اللاعبين فى جميع
                الاندية و التعاون مع جميع الاندية لبناء جيل قوى بنديا و ممارس
                للعبة كرة القدم . تعمل الاكاديمية على اعداد و تاهيل اللاعبين من
                سن صغير للدخول فى عالم كرة القدم . كما تعمل الاكاديمية على تسويق
                اللاعبين فى جميع الاندية و التعاون مع جميع الاندية لبناء جيل قوى
                بنديا و ممارس للعبة كرة القدم{" "}
              </p>
            </div>
          </div>
          <div className="gool py-12 relative">
            <h3 className="w-fit p-5 text-white bg-black rounded-md font-bold text-xl relative right-2/4 translate-x-2/4 mb-8">
              {" "}
              اهدافنا{" "}
            </h3>
            <ul className="gool-links flex items-center justify-around flex-wrap gap-10">
              <li className="gool-link p-5 text-white bg-black rounded-md font-bold text-xl w-60 text-center">
                {" "}
                تدريب{" "}
              </li>
              <li className="gool-link p-5 text-white bg-black rounded-md font-bold text-xl w-60 text-center">
                {" "}
                تاهيل{" "}
              </li>
              <li className="gool-link p-5 text-white bg-black rounded-md font-bold text-xl w-60 text-center">
                {" "}
                ايجاد عروض{" "}
              </li>
              <li className="gool-link p-5 text-white bg-black rounded-md font-bold text-xl w-60 text-center">
                {" "}
                رفع لياقة بدنية{" "}
              </li>
              <li className="gool-link p-5 text-white bg-black rounded-md font-bold text-xl w-60 text-center">
                {" "}
                الاشتراك فى بطولات{" "}
              </li>
              <li className="gool-link p-5 text-white bg-black rounded-md font-bold text-xl w-60 text-center">
                {" "}
                اكتساب خبرات{" "}
              </li>
            </ul>
          </div>
          <div className="boss relative mb-[50px] overflow-hidden rounded-[20px]">
            <img className="w-full rounded-[20px]" src={boss} alt="boss"/>
            <div className="boss-info absolute bottom-0 w-full bg-[#ededed8a] p-[20px] right-2/4 rounded-[20px] translate-x-2/4">
            <h1> مدير الاكاديمية ك / ابراهيم </h1>
            <p> تعمل الاكاديمية على اعداد و تاهيل اللاعبين من سن صغير للدخول فى
                عالم كرة القدم . كما تعمل الاكاديمية على تسويق اللاعبين فى جميع
                الاندية و التعاون مع جميع الاندية لبناء جيل قوى بنديا و ممارس
                للعبة كرة القدم . 
            </p>
            </div>
          </div>
          <div className="contact bg-[brown] p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">
              للتواصل معنا
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="write your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[orange]"
              />
              <textarea
                placeholder="write your message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[orange] h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full font-bold bg-[darkorange] text-[brown] p-3 rounded-lg hover:bg-[orange] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
