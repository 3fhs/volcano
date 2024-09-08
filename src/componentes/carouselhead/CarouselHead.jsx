import React from "react";
import mwhbtk from "../../image/mwhbtk.jpg";
import mwhbtk1 from "../../image/mwhbtk1.jpg";
import mwhbtk2 from "../../image/mwhbtk2.jpg";
import mwhbtk3 from "../../image/mwhbtk3.jpg";

function CarouselHead() {
  return (
    <section className="carousel-section pl-7 pr-7 pb-12">
      <div className="carousel w-full rounded-2xl" style={{ height: "100vh" }}>
        <div id="slide1" className="carousel-item relative w-full">
          <img src={mwhbtk} alt="mwhbtk" className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="info absolute bg-[#8d0500] bottom-0 right-2/4 translate-x-1/2 w-full min-h-24 text-center p-2 rounded-xl">
            <h1 className="text-xl font-bold text-white mb-3">
              {" "}
              نصائح من كابتن ابراهيم للفريق{" "}
            </h1>
            <p className="text-lg font-normal text-white">
              {" "}
              اعطى كابتن ابراهيم تعليمات فنيه و حذر اللاعبين من التهاون{" "}
            </p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={mwhbtk3} alt="mwhbtk" className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="info absolute bg-[#8d0500] bottom-0 right-2/4 translate-x-1/2 w-full min-h-24 text-center p-2 rounded-xl">
            <h1 className="text-xl font-bold text-white mb-3">
              {" "}
              شهادة تقدير للاكاديمية{" "}
            </h1>
            <p className="text-lg font-normal text-white">
              {" "}
              اعطى السيد منظم البطولة لقب هداف البطولة لفريق البراكين{" "}
            </p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={mwhbtk2} alt="mwhbtk" className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="info absolute bg-[#8d0500] bottom-0 right-2/4 translate-x-1/2 w-full min-h-24 text-center p-2 rounded-xl">
            <h1 className="text-xl font-bold text-white mb-3">
              {" "}
              الابطال حققوا الحلم{" "}
            </h1>
            <p className="text-lg font-normal text-white">
              {" "}
              نجح فريق البراكين فى التتويج بلقب كاس موهبتك{" "}
            </p>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={mwhbtk1} alt="mwhbtk" className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="info absolute bg-[#8d0500] bottom-0 right-2/4 translate-x-1/2 w-full min-h-24 text-center p-2 rounded-xl">
            <h1 className="text-xl font-bold text-white mb-3">
              {" "}
              صورة تذكارية{" "}
            </h1>
            <p className="text-lg font-normal text-white">
              {" "}
              صورة تذكارية للجميع فى نهاية البطولة{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselHead;
