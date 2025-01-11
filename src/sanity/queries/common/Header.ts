import { defineQuery } from "next-sanity";
import { LinkQuery } from "./Link";

export const Header = `
    _id,
    _type,
    logo,
    headerLinks[]{
       ${LinkQuery}
        dropdownLinks[]{
            ${LinkQuery}
        }
        
    }
`;

export const HeaderQuery = defineQuery(`*[_type == "header"][0]{
    ${Header}
  }
`);
