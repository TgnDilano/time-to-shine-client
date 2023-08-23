import React from "react";

import partner0 from "../assets/partners/partner_0.jpg";
import partner1 from "../assets/partners/partner_1.jpg";
import partner2 from "../assets/partners/partner_2.jpg";
import partner3 from "../assets/partners/partner_3.jpg";
import partner4 from "../assets/partners/partner_4.jpg";
import partner5 from "../assets/partners/partner_5.jpg";
import partner6 from "../assets/partners/partner_6.jpg";
import partner7 from "../assets/partners/partner_7.jpg";
import partner8 from "../assets/partners/partner_8.jpg";
import partner9 from "../assets/partners/partner_9.jpg";
import partner10 from "../assets/partners/partner_10.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Partners = () => {
  const images = [
    partner0,
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
  ];

  return (
    <section className="h- w-screen py-16 bg-risenBlack flex flex-col items-center justify-center gap-y-14 text-white">
      <div className="text-center">
        <h2 className="font-semibold  text-4xl">Nos Partenaires</h2>
        <p className=" text-xl mt-2">
          "Seuls, nous pouvons faire si peu, ensemble, nous pouvons faire
          beaucoup." - Helen Keller
        </p>
      </div>
      <div className="w-full h-56 px-12">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={6}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          className=""
        >
          {images.map((e) => (
            <SwiperSlide>
              <img src={e} className="w-64 h-52 cursor-pointer " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
