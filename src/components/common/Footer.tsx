import { urlFor } from "@/sanity/lib/image";
import { FooterType } from "@/types/common/Footer";
import Image from "next/image";
import Link from "next/link";

interface Props {
  footer: FooterType;
}

const Footer = ({ footer }: Props) => {
  return (
    <footer className="bg-brand text-white p-6 md:p-12 md:pb-5 border-t border-gray-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-5">
          {footer?.footerlinks?.map((section) => (
            <div key={section?._key} className="col-span-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                {section?.name}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?._key}>
                    <Link
                      href={link?.link || "#"}
                      className="text-md text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              Social
            </h3>
            <div className="flex flex-wrap gap-3">
              {footer?.socialMedia?.map((contact, index) => (
                <Link
                  href={contact?.url}
                  key={index}
                  target="_blank"
                  className="flex items-center hover:text-white transition-all duration-300 border border-gray-400 hover:border-gray-300 rounded-full p-1.5"
                >
                  <Image
                    src={urlFor(contact?.icon)}
                    alt={contact?.url}
                    width={25}
                    height={25}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-200">
              {footer?.contactDetails?.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-300 gap-2 hover:text-white transition-all duration-300"
                >
                  {contact?.link ? (
                    <Link
                      href={contact?.link as string}
                      className="flex items-center gap-2"
                    >
                      <Image
                        src={urlFor(contact?.icon)}
                        alt={contact?.label}
                        width={25}
                        height={25}
                      />
                      <p>{contact?.label}</p>
                    </Link>
                  ) : (
                    <>
                      <Image
                        src={urlFor(contact?.icon)}
                        alt={contact?.label}
                        width={25}
                        height={25}
                      />
                      <p>{contact?.label}</p>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-gray-400">
          <p className="text-md font-sans text-gray-100 capitalize">
            designed and developed by
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
