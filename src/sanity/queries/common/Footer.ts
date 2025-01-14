import { defineQuery } from "next-sanity";
import { LinkQuery } from "./Link";

export const Footer = `
  _id,
  footerlinks[] {
    name,
    links[] {
      ${LinkQuery}
    }
  },
  contactDetails[]{
    _key,
    icon,
    label,
    link
  },
  socialMedia[]{
    _key,
    url,
    icon
  }
`;

export const FooterQuery = defineQuery(`*[_type == "footer"][0]{
    ${Footer}
  }
`);
