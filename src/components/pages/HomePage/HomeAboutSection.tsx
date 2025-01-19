"use client";
import { HomeAboutSection as HomeAboutSectionType } from "@/types/pages/HomePage";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeAboutSection = ({ data }: { data: HomeAboutSectionType }) => {
  return (
    <section className="h-screen w-full flex items-center justify-center p-3 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8">
        <motion.div className="px-0 lg:pl-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {data?.title}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm md:text-base lg:text-lg text-gray-600 mb-5"
          >
            {data?.description}
          </motion.h3>
          <Link href={data?.cta?.link}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-brand text-white py-2 px-4 md:py-3 md:px-6 uppercase"
            >
              {data?.cta?.label}
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className="flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={urlFor(data?.image?.image)}
              alt={data?.image?.alt || "Image"}
              height={650}
              width={800}
              className="max-w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
