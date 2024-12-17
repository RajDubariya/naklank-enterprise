"use client";

import { HomeHeroSection as HomeHeroSectionType } from "@/types/pages/HomePage";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HomeHeroSection = ({ data }: { data: HomeHeroSectionType }) => {
  const swiperRef = useRef<any>(null);


  const handleMouseEnter = () => {
    swiperRef.current?.swiper.autoplay.stop();
  };


  const handleMouseLeave = () => {
    swiperRef.current?.swiper.autoplay.start();
  };

  return (
    <div className="relative w-full mx-auto p-2 md:p-4 bg-gray-100">

      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {data?.images?.map((heroImage) => (
          <SwiperSlide key={heroImage._key}>

            <div
              className="relative overflow-hidden group rounded-lg shadow-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

              <Link href={heroImage?.title?.link || "#"} passHref>

                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] cursor-pointer">
                  <Image
                    src={urlFor(heroImage?.image?.image)}
                    alt={heroImage?.image?.alt || "Hero Image"}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px]"
                  />
                </div>

              </Link>


              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>


              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xs sm:text-2xl md:text-2xl font-bold drop-shadow-md">
                  {heroImage?.title?.label || "Explore"}
                </h3>
                <Link
                  href={heroImage?.title?.link || "#"}
                  className="inline-block mt-2 px-4 py-2 mb-7 sm:px-6 sm:py-3 bg-brand-light text-black font-semibold rounded-full shadow-md hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeroSection;
