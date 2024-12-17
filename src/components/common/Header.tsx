import { urlFor } from "@/sanity/lib/image";
import { HeaderType } from "@/types/common/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  header: HeaderType;
}

const Header = (props: Props) => {
  const { header } = props;

  return (
    <div className="bg-brand flex items-center justify-between p-2 pr-6 pl-5">
      <div className="flex items-center space-x-4">
        <Image
          src={urlFor(header?.logo?.image)}
          alt={header?.logo?.alt}
          width={90}
          height={90}
        />
      </div>

      <div className="flex space-x-6 relative">
        {header?.headerLinks?.map((item, index) => (
          <div key={index} className="relative">
            <Link
              href={item?.link || "#"}
              className="text-white text-lg relative"
            >
              <span
                className="group inline-block relative hover:text-brand-light cursor-pointer"
              >
                {/* Label text hover trigger */}
                {item?.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-light group-hover:w-full transition-all duration-300"></span>

                {/* Dropdown Section */}
                {item?.dropdownLinks && item?.dropdownLinks.length > 0 && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50">
                    <ul className="py-0.5">
                      {item?.dropdownLinks?.map((dropdownItem, dropdownIndex) => (
                        <li
                          key={dropdownItem?._key || dropdownIndex}
                          className="hover:bg-[#3e4095] transition-colors duration-300"
                        >
                          <Link
                            href={dropdownItem?.link}
                            className="block px-4 py-2 text-sm text-gray-800 hover:text-white"
                          >
                            {dropdownItem?.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
