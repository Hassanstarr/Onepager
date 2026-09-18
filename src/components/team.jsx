import { useState } from "react";
import TeamCard from "./teamCard.jsx";
import teamData from "../data/team.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

function Team() {
  const [swiper, setSwiper] = useState(null);

  return (
    <div id="Team" className="relative flex w-full flex-col items-center justify-center bg-[#333333] py-30">
        <h1 className="font-['Courier_New'] text-[45px] font-bold uppercase text-white">
            Meet the Team
        </h1>
        <p className="mb-5 font-['Courier_New'] text-[18px] text-white">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        <div className="w-full page-container">
            <Swiper
            modules={[Grid]}
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={12}
            speed={700}
            onSwiper={setSwiper}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    grid: {
                        rows: 4,
                        fill: "row",
                    },
                },

                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    grid: {
                        rows: 1,
                    },
                },
            }}
            >
            {teamData.map((team) => (
                <SwiperSlide key={team.id}>
                <TeamCard
                    image={team.image}
                    name={team.name}
                    role={team.role}
                />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        <button
            onClick={() => {
                if(swiper.isBeginning) {
                    swiper.slideTo(swiper.slides.length - 4);
                } else {
                    swiper.slidePrev();
                }
            }}
            className="absolute left-0 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center py-10 bg-black text-white cursor-pointer hover:scale-110"
        >
            <FaChevronLeft />
        </button>

        <button
            onClick={() => {
                if(swiper.isEnd) {
                    swiper.slideTo(0)
                } else {
                    swiper.slideNext();
                }
            }}
            className="absolute right-0 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center py-10 bg-black text-white cursor-pointer hover:scale-110"
        >
            <FaChevronRight />
        </button>
    </div>
  );
}

export default Team;