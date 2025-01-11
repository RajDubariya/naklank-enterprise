"use client";

import { urlFor } from "@/sanity/lib/image";
import { HomeHeroSection as HomeHeroSectionType } from "@/types/pages/HomePage";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-black pointer-events-none z-10"
              />
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
              <div className="absolute top-[20%] md:top-[40%] left-2 md:left-8 text-white max-w-2xl z-20">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-5xl md:text-6xl mb-4 font-semibold capitalize drop-shadow-lg"
                >
                  {heroImage?.title?.label}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-lg"
                >
                  {heroImage?.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Link
                    href={heroImage?.title?.link || "#"}
                    className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-black transition-colors uppercase text-sm tracking-wider mt-8"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Find out more
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeroSection;
