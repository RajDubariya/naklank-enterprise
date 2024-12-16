import { ReactNode } from "react";
import Header from "./common/Header";
import { HeaderType } from "@/types/common/Header";
import { FooterType } from "@/types/common/Footer";
import Footer from "./common/Footer";
// import { FooterType } from "@/sanity/types/common/FooterType";
// import Footer from "./common/Footer";

interface Props {
  children?: ReactNode;
  header: HeaderType;
    footer: FooterType;
}
const Layout = (props: Props) => {
  const { children, header ,footer} = props;
  return (
    <div>
      <Header header={header} />
      {children}
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;
