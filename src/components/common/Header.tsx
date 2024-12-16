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
    <header className="bg-brand flex items-center justify-between p-4 px-5">
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
          <div key={index} className="relative group">
            <Link
              href={item?.link || "#"}
              className="text-white text-lg relative group-hover:text-brand-light"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {item?.label}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-light group-hover:w-full transition-all duration-300"></span>
            </Link>

            {item?.dropdownLinks && item?.dropdownLinks.length > 0 && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-500 z-50">
                <ul className="py-2">
                  {item?.dropdownLinks?.map((dropdownItem) => (
                    <li
                      key={item?._key}
                      className="hover:bg-brand transition-colors duration-300"
                    >
                      <Link
                        href={dropdownItem?.link}
                        className="block px-4 py-2 text-sm text-gray-800 hover:text-white rounded-s-3xl"
                      >
                        {dropdownItem?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
