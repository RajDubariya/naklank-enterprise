import { AboutSectionType } from "@/types/pages/AboutUsPage";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

const AboutSection = ({ data }: { data: AboutSectionType }) => {
  console.log(data);

  return (
    <div className="py-12">
   <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12 relative">
  <span className="inline-block pb-2 border-b-4 border-brand">
    {data?.title}
  </span>
</h1>

      <div className="space-y-20">
        {data?.items?.map((item: any, index: number) => (
          <div
            key={item?._key || index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0
                ? "md:flex-row-reverse"
                : "md:flex-row bg-gray-100 py-20"
            } items-center p-6 px-12 gap-8`}
          >
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-lg">
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
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl mb-3 lg:text-4xl md:mb-8 font-bold text-black uppercase">
                {item?.maintitle || "Main Title"}
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600">
                {item?.title || "Section Title"}
              </h3>
              <p className="text-base md:text-base lg:text-lg text-gray-500">
                <PortableText value={item?.description} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
