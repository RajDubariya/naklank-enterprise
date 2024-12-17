"use client";

import { urlFor } from "@/sanity/lib/image";
import { HeaderType } from "@/types/common/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

interface Props {
  header: HeaderType;
}

const Header = (props: Props) => {
  const { header } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  return (
    <div className="bg-brand text-white relative z-50">
      {/* Navbar Container */}
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={urlFor(header?.logo?.image)}
            alt={header?.logo?.alt || "Logo"}
            width={90}
            height={90}
          />
        </div>

        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#ffffff" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {header?.headerLinks?.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenDropdownIndex(index)} // Open dropdown on hover
              onMouseLeave={() => setOpenDropdownIndex(null)} // Close dropdown on hover out
            >
              <Link
                href={item?.link || "#"}
                className="relative block hover:text-brand-light cursor-pointer"
              >
                {item?.label}
                {/* Underline Animation */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-light transition-all duration-300 ${
                    openDropdownIndex === index ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
              <div>
                {/* Dropdown for Desktop */}
                {item?.dropdownLinks && item?.dropdownLinks?.length > 0 && (
                  <div
                    className={`absolute left-0 w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-300 ${
                      openDropdownIndex === index
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <ul className="py-0.5">
                      {item?.dropdownLinks?.map(
                        (dropdownItem, dropdownIndex) => (
                          <li
                            key={dropdownItem?._key || dropdownIndex}
                            className="hover:bg-brand transition-colors duration-300"
                          >
                            <Link
                              href={dropdownItem?.link}
                              className="block px-4 py-2 text-sm text-gray-800 hover:text-white"
                            >
                              {dropdownItem?.label}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed top-0 left-0 w-full h-screen bg-brand text-white shadow-lg transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl self-end"
          >
            &#x2715;
          </button>

          {header?.headerLinks?.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item?.link || "#"}
                className="block text-lg hover:text-brand-light"
                onClick={() => setIsOpen(false)}
              >
                {item?.label}
              </Link>

              {/* Dropdown for Mobile */}
              {item?.dropdownLinks && item?.dropdownLinks.length > 0 && (
                <div className="ml-4 mt-1">
                  {item?.dropdownLinks.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownItem?._key || dropdownIndex}
                      href={dropdownItem?.link || "#"}
                      className="block py-0.5 text-sm text-gray-300 hover:text-brand-light"
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem?.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
