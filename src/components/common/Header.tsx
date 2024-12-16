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
    <div className="bg-brand flex">
      <Image
        src={urlFor(header?.logo?.image)}
        alt={header?.logo?.alt}
        width={200}
        height={200}
      />
      {header?.headerLinks?.map((item) => (
        <Link href={item?.link}>{item?.label}</Link>
      ))}
    </div>
  );
};

export default Header;
