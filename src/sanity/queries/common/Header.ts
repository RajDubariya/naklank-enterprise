import { defineQuery } from "next-sanity";
import { LinkQuery } from "./Link";
import { FooterQuery } from "./Footer";

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

export const CombinedQuery = defineQuery(`
    {
      "header":${HeaderQuery},
      "footer": ${FooterQuery}
    }
  `);
