"use client";

import { HomeHeroSection as HomeHeroSectionType } from "@/types/pages/HomePage";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HomeHeroSection = ({ data }: { data: HomeHeroSectionType }) => {
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current?.swiper) swiperRef.current.swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.swiper) swiperRef.current.swiper.autoplay.start();
  };

  return (
    <div className="relative w-full mx-auto p-2 md:p-4">
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
          <SwiperSlide key={heroImage?._key || Math.random()}>
            <div
              className="relative overflow-hidden group rounded-lg shadow-lg"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={heroImage?.title?.link || "#"}>
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[630px] cursor-pointer">
                  <Image
                    src={
                      heroImage?.image?.image
                        ? urlFor(heroImage?.image?.image)
                        : "/fallback-image.jpg"
                    }
                    alt={heroImage?.image?.alt || "Hero Image"}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[0.8px]"
                  />
                </div>
              </Link>

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white text-center">
                <h3 className="text-lg sm:text-3xl md:text-4xl font-bold drop-shadow-md">
                  {heroImage?.title?.label || "Explore"}
                </h3>
                <Link
                  href={heroImage?.title?.link || "#"}
                  className="inline-block mt-4 px-6 py-3 mb-7 sm:px-8 sm:py-4 bg-brand-light text-white font-semibold rounded-full shadow-md hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
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
