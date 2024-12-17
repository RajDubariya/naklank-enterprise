"use client";

import { HomeAboutSection as HomeAboutSectionType } from "@/types/pages/HomePage";
import Image from "next/image";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { urlFor } from "@/sanity/lib/image";

const HomeAboutSection = ({ data }: { data: HomeAboutSectionType }) => {
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {};

  return (
    <div className="relative w-full mx-auto p-2 md:p-4 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
          {data?.title}
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-lg">
          {data?.description}
        </p>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        loop={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {data?.business_details?.map((detail) => (
          <SwiperSlide key={detail?._key}>
            <div
              className="relative p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={urlFor(detail.icon.image)}
                  alt={detail.point_title}
                  width={64}
                  height={64}
                  objectFit="contain"
                  className="rounded-full shadow-md"
                />
              </div>

              <h3 className="text-xl font-semibold text-center text-brand-dark">
                {detail.point_title}
              </h3>

              <p className="mt-2 text-center text-gray-600">
                {detail.point_value}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeAboutSection;
