import { defineQuery } from "next-sanity";
import { Header, HeaderQuery } from "../common/Header";
import { Footer, FooterQuery } from "../common/Footer";

export const PageQuery =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _type,
    name,
    "slug": slug.current,
    "header":${HeaderQuery},
    "footer":${FooterQuery},
    sections
  } 
`);
