"use client";
import { urlFor } from "@/sanity/lib/image";
import { HomeProductsSection, ProductTab } from "@/types/pages/HomePage";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductsTabs = ({ data }: { data: HomeProductsSection }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!data?.tabs || data?.tabs?.length === 0) {
    return null;
  }

  const handleTabChange = (index: number): void => {
    setActiveTab(index);
  };

  const renderTabButton = (tab: ProductTab, index: number): JSX.Element => (
    <motion.button
      key={tab?._key || index}
      onClick={() => handleTabChange(index)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`px-4 md:px-6 py-2 text-sm md:text-base font-medium transition-colors uppercase
      ${
        activeTab === index
          ? "text-black border-t-[3px] border-black"
          : "text-gray-400 hover:text-gray-500"
      }`}
    >
      {tab?.tab_name}
    </motion.button>
  );

  const renderTabContent = (tab: ProductTab): JSX.Element => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-square"
      >
        {tab?.content?.product_image && (
          <Image
            src={urlFor(tab?.content?.product_image?.image)}
            alt={tab?.content?.heading}
            className="w-full h-full object-cover"
            height={500}
            width={500}
          />
        )}
      </motion.div>

      <div className="space-y-2 md:space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-5xl font-bold capitalize"
        >
          {tab?.content?.heading}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-gray-600 text-sm md:text-lg leading-relaxed"
        >
          {tab?.content?.description}
        </motion.p>
        <Link href={tab?.content?.cta?.link}>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-white bg-black py-2 px-4 md:py-3 md:px-6 uppercase mt-4"
          >
            {tab?.content?.cta?.label}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full px-4 sm:px-6 py-12 md:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start md:justify-center gap-4 md:gap-8 mb-6 md:mb-12 overflow-x-auto scrollbar-hide">
          {data?.tabs?.map((tab, index) => renderTabButton(tab, index))}
        </div>

        <AnimatePresence mode="wait">
          {data?.tabs?.[activeTab] && renderTabContent(data?.tabs?.[activeTab])}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsTabs;
