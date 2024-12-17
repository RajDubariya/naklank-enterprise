import { FooterType } from "@/types/common/Footer";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  footer: FooterType;
}

const Footer = ({ footer }: Props) => {
  return (
    <footer className="bg-brand text-white p-8 md:p-12 md:pb-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/">
            <Image
              src={urlFor(footer?.logo?.image)}
              alt={footer?.logo?.alt || "Logo"}
              width={200}
              height={200}
              className="rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
          {footer?.footerlinks?.map((section) => (
            <div key={section?._key}>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                {section?.name}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?._key}>
                    <Link
                      href={link?.link || "#"}
                      className="text-md text-gray-200 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-200">
            {footer?.contactDetails?.map((contact, index) => (
              <li
                key={index}
                className="flex items-center justify-center md:justify-start hover:text-white transition-all duration-300"
              >
                {contact}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-gray-400">
        <p className="text-md font-sans text-gray-100 ">{footer?.eula}</p>
      </div>
    </footer>
  );
};

export default Footer;
