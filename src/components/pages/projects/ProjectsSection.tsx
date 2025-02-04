"use client";
import { urlFor } from "@/sanity/lib/image";
import { ProjectsSectionType } from "@/types/pages/ProjectsPage";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectsSection = ({ data }: { data: ProjectsSectionType }) => {
  const { title, items, bg_image } = data;

  return (
    <section>
      <div className="mb-14">
        <div className="relative flex justify-center items-center h-[175px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${urlFor(bg_image?.image)})`,
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative text-3xl md:text-5xl lg:text-5xl font-bold text-center z-10 text-white"
          >
            <span className="inline-block">{title}</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:px-12 mt-8">
          {items?.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              key={item?._key}
              className="rounded-lg overflow-hidden"
            >
              <div className="relative w-full aspect-[13/7]">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  loop
                  spaceBetween={0}
                  slidesPerView={1}
                  className="absolute inset-0 h-full w-full"
                >
                  {item?.images?.map((image, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                      <Image
                        src={urlFor(image?.image)}
                        alt={image?.alt || "Project Image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="bg-yellow-500 mt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
                  {item?.details?.map((detail) => (
                    <div key={detail?._key} className="text-black">
                      <h3 className="font-bold mb-1 text-base md:text-lg">
                        {detail?.detail1}
                      </h3>
                      <p className="text-xs md:text-sm">{detail?.detail2}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
