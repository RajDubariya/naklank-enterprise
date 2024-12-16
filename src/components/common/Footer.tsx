import { FooterType } from "@/types/common/Footer";
import React from "react";

interface Props {
  footer: FooterType;
}

const Footer = (props: Props) => {
  const { footer } = props;

  return <div>Footer</div>;
};

export default Footer;
