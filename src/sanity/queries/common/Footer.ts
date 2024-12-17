import { defineQuery } from "next-sanity";
import { LinkQuery } from "./Link";

export const Footer = `
    _id,
    logo,
    slogan,
    eula,
   footerlinks[] {
   _key,
    name,
    links[] {
      ${LinkQuery}
        }
    },
    contactDetails
`;

export const FooterQuery = defineQuery(`*[_type == "header"]{
    ${Footer}
  }
`);
