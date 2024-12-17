import { HomeAboutSection as HomeAboutSectionType } from "@/types/pages/HomePage";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

const HomeAboutSection = ({ data }: { data: HomeAboutSectionType }) => {
  return (
    <div className="relative w-full mx-auto p-2 md:p-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
          {data?.title}
        </h2>
        <p className="mt-2 text-gray-600 text-sm lg:w-1/2 mx-auto">
          {data?.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:px-12">
        {data?.business_details?.map((detail) => (
          <div
            key={detail?._key}
            className="relative p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <Image
                src={urlFor(detail?.icon?.image)}
                alt={detail?.point_title}
                width={64}
                height={64}
                objectFit="contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-center text-brand-dark">
              {detail?.point_title}
            </h3>

            <p className="mt-2 text-center text-gray-600">
              {detail?.point_value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAboutSection;
