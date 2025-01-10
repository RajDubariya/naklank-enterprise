"use client";
import { urlFor } from "@/sanity/lib/image";
import { HomeProductsSection, ProductTab } from "@/types/pages/HomePage";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductsTabs = ({ data }: { data: HomeProductsSection }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!data?.tabs || data?.tabs?.length === 0) {
    return null;
  }

  const handleTabChange = (index: number): void => {
    setActiveTab(index);
  };

  const renderTabButton = (tab: ProductTab, index: number): JSX.Element => (
    <button
      key={tab?._key || index}
      onClick={() => handleTabChange(index)}
      className={`px-4 md:px-6 py-2 text-sm md:text-base font-medium transition-colors uppercase
      ${
        activeTab === index
          ? "text-white border-t-[3px] border-white"
          : "text-gray-300 hover:text-gray-400"
      }`}
    >
      {tab?.tab_name}
    </button>
  );

  const renderTabContent = (tab: ProductTab): JSX.Element => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div className="relative aspect-square">
        {tab?.content?.product_image && (
          <Image
            src={urlFor(tab?.content?.product_image?.image)}
            alt={tab?.content?.heading}
            className="w-full h-full object-cover"
            height={500}
            width={500}
          />
        )}
      </div>

      <div className="space-y-2 md:space-y-6">
        <h3 className="text-2xl md:text-5xl font-bold capitalize text-white">
          {tab?.content?.heading}
        </h3>

        <p className="text-gray-300 text-sm md:text-lg leading-relaxed ">
          {tab?.content?.description}
        </p>
        <button className="bg-white text-black py-2 px-4 md:py-3 md:px-6 uppercase">
          <Link href={tab?.content?.cta?.link}>{tab?.content?.cta?.label}</Link>
        </button>
      </div>
    </div>
  );

  return (
    <section className="w-full  px-4 sm:px-6 py-12 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start md:justify-center gap-4 md:gap-8 mb-6 md:mb-12 overflow-x-auto scrollbar-hide">
          {data?.tabs?.map((tab, index) => renderTabButton(tab, index))}
        </div>

        {data?.tabs?.[activeTab] && renderTabContent(data?.tabs?.[activeTab])}
      </div>
    </section>
  );
};

export default ProductsTabs;
