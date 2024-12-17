import { FooterType } from "@/types/common/Footer";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  footer: FooterType;
}

const Footer = (props: Props) => {
  const { footer } = props;

  return (
    <footer className="bg-brand text-white p-6">
      <div className="container flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col items-start space-y-4 mr-20">
          <Image
            src={urlFor(footer?.logo?.image)}
            alt={footer?.logo?.alt || "Logo"}
            width={170}
            height={170}
            className="rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10">
          {footer?.footerlinks?.map((section) => (
            <div key={section._key}>
              <h3 className="text-lg font-semibold mb-3 text-gray-300 ">
                {section.name}
              </h3>
              <ul className="space-y-2">
                {section?.links?.map((link) => (
                  <li key={link?._key}>
                    <Link
                      href={link?.link || "#"}
                      className="text-sm text-gray-300 hover:text-white transition-all duration-300"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold mb-3 text-gray-300">
            Contact Us
          </h3>
          <ul className="text-sm space-y-2 text-gray-300">
            {footer?.contactDetails?.map((contact, index) => (
              <li key={index} className="hover:text-white transition-all">
                {contact}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-xs text-gray-300">
        <p>{footer?.eula}</p>
      </div>
    </footer>
  );
};

export default Footer;
