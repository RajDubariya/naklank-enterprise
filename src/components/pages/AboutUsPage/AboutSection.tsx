"use client";
import { urlFor } from "@/sanity/lib/image";
import { AboutSectionType, Item } from "@/types/pages/AboutUsPage";
import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Image from "next/image";

const AboutSection = ({ data }: { data: AboutSectionType }) => {
  return (
    <section>
      <div className="mb-14">
        <div className="relative flex justify-center items-center h-[175px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${urlFor(data.bg_image?.image)})`,
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
            <span className="inline-block">{data?.title}</span>
          </motion.h1>
        </div>
      </div>
      <div className="space-y-20">
        {data?.items?.map((item: Item, index: number) => (
          <motion.div
            key={item?._key || index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0
                ? "md:flex-row-reverse"
                : "md:flex-row bg-brand/10 py-20"
            } items-center p-4 md:px-12 gap-8`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-lg"
            >
              <Image
                src={
                  item?.image?.image
                    ? urlFor(item?.image?.image)
                    : "/fallback-image.jpg"
                }
                alt={item?.image?.alt || "About Us Image"}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>

            <div className="w-full md:w-1/2 space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl mb-3 lg:text-4xl md:mb-6 font-bold text-black uppercase"
              >
                {item?.maintitle || "Main Title"}
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="text-xl md:w-[80%] md:text-2xl lg:text-2xl font-semibold text-gray-600"
              >
                {item?.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="text-base md:text-base lg:text-lg text-gray-500"
              >
                <PortableText value={item?.description} />
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
