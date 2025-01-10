"use client";

import { urlFor } from "@/sanity/lib/image";
import { HeaderType } from "@/types/common/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-colors duration-500 ${
        hasScrolled ? "bg-black/70" : "bg-transparent"
      } text-white`}
    >
      <div className="flex items-center gap-10 p-4">
        <div className="flex items-center">
          <Image
            src={urlFor(header?.logo?.image)}
            alt={header?.logo?.alt || "Logo"}
            width={90}
            height={90}
          />
        </div>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#ffffff" />
        </div>

        <div className="hidden md:flex space-x-6">
          {header?.headerLinks?.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenDropdownIndex(index)}
              onMouseLeave={() => setOpenDropdownIndex(null)}
            >
              <Link
                href={item?.link || "#"}
                className="relative block hover:text-brand-light cursor-pointer"
              >
                {item?.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-light transition-all duration-300 ${
                    openDropdownIndex === index ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
              <div>
                {item?.dropdownLinks && item?.dropdownLinks?.length > 0 && (
                  <div
                    className={`absolute left-0  w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-300 ${
                      openDropdownIndex === index
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <ul className="">
                      {item?.dropdownLinks?.map(
                        (dropdownItem, dropdownIndex) => (
                          <li
                            key={dropdownItem?._key || dropdownIndex}
                            className="hover:bg-black transition-colors duration-500"
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

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed top-0 left-0 w-full h-screen bg-white text-black shadow-lg transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-2xl self-end"
          >
            &#x2715;
          </button>

          {header?.headerLinks?.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item?.link || "#"}
                className="block text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item?.label}
              </Link>
              {item?.dropdownLinks && item?.dropdownLinks.length > 0 && (
                <div className="ml-4 mt-1">
                  {item?.dropdownLinks.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownItem?._key || dropdownIndex}
                      href={dropdownItem?.link || "#"}
                      className="block py-0.5 text-sm text-gray-500 hover:text-brand-light"
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
