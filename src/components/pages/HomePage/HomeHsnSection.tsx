import { HomeHsnSection as HomeHsnSectionType } from "@/types/pages/HomePage";
import React from "react";

const HomeHsnSection = ({ data }: { data: HomeHsnSectionType }) => {
  return (
    <section className="my-3 mx-auto p-4">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4 mt-6">
        {data?.title}
      </h2>

      {data?.description && (
        <p className="text-center text-gray-600 mb-8">{data?.description}</p>
      )}

      <div className="overflow-x-auto lg:w-[65%] mx-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-3 border-b font-semibold text-white bg-brand">
                HSN Code
              </th>
              <th className="text-left px-4 py-3 border-b font-semibold text-white bg-brand">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.hsn_details?.map((item, index) => (
              <tr
                key={item?.hsn_code}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="px-4 py-3 border-b text-gray-800">
                  {item?.hsn_code}
                </td>
                <td className="px-4 py-3 border-b text-gray-800">
                  {item?.hsn_description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HomeHsnSection;
