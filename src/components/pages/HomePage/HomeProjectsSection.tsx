import { urlFor } from "@/sanity/lib/image";
import { OurProjectsSectionType } from "@/types/pages/HomePage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeProjectsSection = ({ data }: { data: OurProjectsSectionType }) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 lg:top-16 lg:h-fit my-auto">
            <h2 className="text-4xl md:text-5xl font-medium mb-4 uppercase">
              {data?.title}
            </h2>
            <p className="text-gray-600 text-lg">{data?.description}</p>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {data?.projects?.map((item) => (
                <Link
                  key={item?._key}
                  href={item?.link?.link}
                  className="group relative overflow-hidden border border-gray-300 aspect-[4/3]"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={urlFor(item?.image?.image)}
                      alt={item?.image?.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity" />
                    <h3 className="absolute bottom-0 left-0 text-xl font-medium text-white p-4 capitalize">
                      {item?.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-2 gap-6 auto-rows-[200px]">
              {data?.projects?.map((item, index) => (
                <Link
                  key={item?._key}
                  href={item?.link?.link}
                  className={`group relative overflow-hidden border border-gray-300 ${
                    index === 2 ? "row-span-2" : ""
                  } ${index === 1 ? "row-span-2" : ""}`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={urlFor(item?.image?.image)}
                      alt={item?.image?.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-500" />
                    <h3 className="absolute bottom-0 left-0 text-xl md:text-2xl font-medium text-white p-6 capitalize">
                      {item?.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjectsSection;
