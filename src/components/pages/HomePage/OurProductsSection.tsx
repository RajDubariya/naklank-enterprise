"use client";
import { urlFor } from "@/sanity/lib/image";
import { SomeOurProductsSectionType } from "@/types/pages/HomePage";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const OurProductsSection = ({ data }: { data: SomeOurProductsSectionType }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-black text-white px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl uppercase mb-4 md:mb-5 font-bold">
            {data.title}
          </h2>
          <button className="bg-white text-black py-2 px-4 md:py-3 md:px-6 uppercase">
            <Link href={data.cta.link} className="no-underline">
              {data.cta.label}
            </Link>
          </button>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-4">
          {data.products?.map((product, index) => (
            <Link
              key={product.title}
              href={product.link.link}
              className="relative w-full h-[300px] block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  src={urlFor(product.firstimage.image)}
                  alt={product.title}
                  className="object-cover"
                  fill
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>

              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={urlFor(product.secondimage.image)}
                  alt={product.title}
                  className="object-cover"
                  fill
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    {product.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop layout (Bento grid) */}
        <div className="hidden md:grid grid-cols-4 gap-8 h-[1000px]">
          {data.products?.map((product, index) => (
            <Link
              key={product.title}
              href={product.link.link}
              className={`relative overflow-hidden col-span-2 ${
                index === 2 ? "row-span-2" : ""
              } ${index === 1 ? "row-span-2" : ""} transition-all duration-500 group`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  src={urlFor(product.firstimage.image)}
                  alt={product.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>

              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={urlFor(product.secondimage.image)}
                  alt={product.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white text-2xl font-semibold">
                    {product.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;
