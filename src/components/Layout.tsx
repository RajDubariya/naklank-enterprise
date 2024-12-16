import { FooterType } from "@/types/common/Footer";
import { HeaderType } from "@/types/common/Header";
import { ReactNode } from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

interface Props {
  children?: ReactNode;
  header: HeaderType;
  footer: FooterType;
}
const Layout = (props: Props) => {
  const { children, header, footer } = props;
  return (
    <div>
      <Header header={header} />
      {children}
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;
