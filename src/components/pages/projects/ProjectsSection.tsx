"use client";
import { urlFor } from "@/sanity/lib/image";
import { ProjectsSectionType } from "@/types/pages/ProjectsPage";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectsSection = ({ data }: { data: ProjectsSectionType }) => {
  const { title, description, items } = data;

  return (
    <section className="py-6 md:py-12">
      <div className="mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-5xl font-bold text-center relative"
        >
          <span className="inline-block pb-4 border-b-4">{title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center md:w-3/4 mx-auto mt-2 md:p-0 p-2"
        >
          {description}
        </motion.p>

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
