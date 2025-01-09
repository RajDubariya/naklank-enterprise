"use client";

import { HomeHeroSection as HomeHeroSectionType } from "@/types/pages/HomePage";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HomeHeroSection = ({ data }: { data: HomeHeroSectionType }) => {
  return (
    <div className="w-full h-[calc(100vh-0px)] relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {data?.images?.map((heroImage) => (
          <SwiperSlide key={heroImage?._key || Math.random()}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />
              <Image
                src={
                  heroImage?.image?.image
                    ? urlFor(heroImage?.image?.image)
                    : "/fallback-image.jpg"
                }
                alt={heroImage?.image?.alt || "Hero Image"}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-[20%] md:top-[40%] left-8 text-white max-w-2xl z-20">
                <h1 className="text-5xl mb-4 capitalize drop-shadow-lg">
                  {heroImage?.title?.label}
                </h1>
                {/* <p className="text-lg mb-8">{heroImage?.description}</p> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur a voluptatibus id totam veritatis, deleniti
                  dignissimos ea reprehenderit porro officia, distinctio fugit
                  doloribus voluptas modi ab impedit quo in neque!
                </p>
                <Link
                  href={heroImage?.title?.link || "#"}
                  className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-black transition-colors uppercase text-sm tracking-wider mt-8"
                >
                  Find out more
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
