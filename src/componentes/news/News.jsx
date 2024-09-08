import React from "react";
import mwhbtk from "../../image/mwhbtk.jpg";
import "./new.css";
import Title from "../titleInHead/Title";

function News() {
  return (
    <div className="pt-14 pb-14 pr-7 pl-7 relative ">
      <Title title=" اخر الاخبار و المستجدات " />
      <div className="pt-5 flex items-center justify-start flex-wrap gap-5">
        <div className="cart flex bg-[brown] text-white gap-2 overflow-hidden rounded-md w-full">
          <img className="img-in-cart-new" src={mwhbtk} alt="news" />
          <div className="cart-info w-full p-3 relative">
            <h3 className="font-bold text-xl pb-2">
              {" "}
              قرار حازم من ك / ابراهيم{" "}
            </h3>
            <p className="text-base pb-14">
              {" "}
              قرر ك / ابراهيم و هو كابتن و قائد اكاديمية البراكين منح راحة لل
              لاعبين بعد الفوز ببطولة الجمهورة لمواليد 2016 ...{" "}
            </p>
            <button className="absolute left-3 bottom-3 font-bold text-[#ffffd1] text-base cursor-pointer flex items-center gap-2">
              {" "}
              تكملة الخبر <i className="bi bi-arrow-left text-xl"></i>
            </button>
          </div>
        </div>
        <div className="cart flex bg-[brown] text-white gap-2 overflow-hidden rounded-md w-full">
          <img className="img-in-cart-new" src={mwhbtk} alt="news" />
          <div className="cart-info w-full p-3 relative">
            <h3 className="font-bold text-xl pb-2">
              {" "}
              قرار حازم من ك / ابراهيم{" "}
            </h3>
            <p className="text-base pb-14">
              {" "}
              قرر ك / ابراهيم و هو كابتن و قائد اكاديمية البراكين منح راحة لل
              لاعبين بعد الفوز ببطولة الجمهورة لمواليد 2016 ...{" "}
            </p>
            <button className="absolute left-3 bottom-3 font-bold text-[#ffffd1] text-base cursor-pointer flex items-center gap-2">
              {" "}
              تكملة الخبر <i className="bi bi-arrow-left text-xl"></i>
            </button>
          </div>
        </div>
        <div className="cart flex bg-[brown] text-white gap-2 overflow-hidden rounded-md w-full">
          <img className="img-in-cart-new" src={mwhbtk} alt="news" />
          <div className="cart-info w-full p-3 relative">
            <h3 className="font-bold text-xl pb-2">
              {" "}
              قرار حازم من ك / ابراهيم{" "}
            </h3>
            <p className="text-base pb-14">
              {" "}
              قرر ك / ابراهيم و هو كابتن و قائد اكاديمية البراكين منح راحة لل
              لاعبين بعد الفوز ببطولة الجمهورة لمواليد 2016 ...{" "}
            </p>
            <button className="absolute left-3 bottom-3 font-bold text-[#ffffd1] text-base cursor-pointer flex items-center gap-2">
              {" "}
              تكملة الخبر <i className="bi bi-arrow-left text-xl"></i>
            </button>
          </div>
        </div>
        <div className="cart flex bg-[brown] text-white gap-2 overflow-hidden rounded-md w-full">
          <img className="img-in-cart-new" src={mwhbtk} alt="news" />
          <div className="cart-info w-full p-3 relative">
            <h3 className="font-bold text-xl pb-2">
              {" "}
              قرار حازم من ك / ابراهيم{" "}
            </h3>
            <p className="text-base pb-14">
              {" "}
              قرر ك / ابراهيم و هو كابتن و قائد اكاديمية البراكين منح راحة لل
              لاعبين بعد الفوز ببطولة الجمهورة لمواليد 2016 ...{" "}
            </p>
            <button className="absolute left-3 bottom-3 font-bold text-[#ffffd1] text-base cursor-pointer flex items-center gap-2">
              {" "}
              تكملة الخبر <i className="bi bi-arrow-left text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <button className="flex items-center w-1/4 h-8 p-8 font-bold justify-center text-xl rounded-md text-white bg-[#410b0b] transition hover:bg-[brown] mt-5 absolute right-2/4 translate-x-2/4">
        {" "}
        لمزيد من الاخبار{" "}
      </button>
    </div>
  );
}

export default News;
