import { ReactNode } from "react";
import Header from "./common/Header";
import { HeaderType } from "@/types/common/Header";
// import { FooterType } from "@/sanity/types/common/FooterType";
// import Footer from "./common/Footer";

interface Props {
  children?: ReactNode;
  header: HeaderType;
  //   footer: FooterType;
}
const Layout = (props: Props) => {
  const { children, header } = props;
  return (
    <div>
      <Header header={header} />
      {children}
      {/* <Footer footer={footer} /> */}
    </div>
  );
};

export default Layout;
