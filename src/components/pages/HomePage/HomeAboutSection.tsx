import { HomeAboutSection as HomeAboutSectionType } from "@/types/pages/HomePage";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const HomeAboutSection = ({ data }: { data: HomeAboutSectionType }) => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-3 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8">
        <div className="px-0  lg:pl-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{data?.title}</h2>
          <h3 className="text-sm md:text-base lg:text-lg text-gray-600 mb-5">
            {data?.description}
          </h3>
          <button className="bg-black text-white py-2 px-4 md:py-3 md:px-6">
            <Link href={data?.cta?.link}>{data?.cta?.label}</Link>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={urlFor(data?.image?.image)}
            alt={data?.image?.alt || "Image"}
            height={650}
            width={800}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
