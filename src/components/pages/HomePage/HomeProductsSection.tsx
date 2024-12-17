import { HomeProductsSection as HomeProductsSectionType } from "@/types/pages/HomePage";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const HomeProductsSection = ({ data }: { data: HomeProductsSectionType }) => {
  return (
    <section className="home-products-section">
      <div className="text-center mt-3">
        <h2 className="text-3xl md:text-4xl justify-between font-bold text-brand-dark">
          {data?.title}
        </h2>
        {data?.description && (
          <p className="text-gray-600 mb-8">{data?.description}</p>
        )}
      </div>

      <div className="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-12">
        {data?.products?.map((product) => (
          <div
            key={product?._key}
            className="product-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="image-wrapper relative w-full h-60 mb-4">
              <Image
                src={urlFor(product?.product_image?.image)}
                alt={product?.product_image?.alt || product?.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <div className="product-info">
              <h3 className="product-title text-lg font-semibold mb-2">
                {product?.title}
              </h3>
              <p className="product-description text-sm text-gray-600 mb-2">
                {product?.description}
              </p>

              <Link
                href={product?.slug}
                className="product-link bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded block text-center transition duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section text-center capitalize">
        <Link
          href={data?.cta?.link}
          className="cta-button inline-block bg-brand hover:bg-brand/80 text-white font-semibold py-3 px-6 rounded transition duration-200"
        >
          {data?.cta.label}
        </Link>
      </div>
    </section>
  );
};

export default HomeProductsSection;
