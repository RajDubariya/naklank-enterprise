"use client";

import { urlFor } from "@/sanity/lib/image";
import { HeaderType } from "@/types/common/Header";
import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="w-full z-50 transition-colors duration-500 bg-brand text-white">
      <div className="flex items-center justify-between md:justify-normal gap-20 px-12">
        <Link href={"/"} className="flex items-center">
          <Image
            src={urlFor(header?.logo?.image)}
            alt={header?.logo?.alt || "Logo"}
            width={100}
            height={100}
          />
        </Link>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#ffffff" />
        </div>

        <div className="hidden md:flex space-x-6">
          {header?.headerLinks?.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenDropdownIndex(index)}
              onMouseLeave={() => setOpenDropdownIndex(null)}
            >
              <Link
                href={item?.link || "#"}
                className="relative block cursor-pointer py-2 uppercase"
              >
                {item?.label}
              </Link>

              {item?.dropdownLinks && item?.dropdownLinks?.length > 0 && (
                <AnimatePresence>
                  {openDropdownIndex === index && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      className="absolute left-0 z-50 mt-1 w-56 bg-white shadow-lg overflow-hidden"
                    >
                      <div>
                        {item?.dropdownLinks?.map(
                          (dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownItem?._key || dropdownIndex}
                              href={dropdownItem?.link}
                              className="block px-4 py-2 text-sm text-gray-800 hover:bg-brand hover:text-white transition-all duration-300"
                            >
                              {dropdownItem?.label}
                            </Link>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
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
                className="block text-lg hover:text-gray-600 transition-colors duration-300"
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
                      className="block py-0.5 text-sm text-gray-500 hover:text-black transition-colors duration-300"
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
