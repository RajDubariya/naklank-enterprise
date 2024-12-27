import { defineQuery } from "next-sanity";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

export const PageQuery =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _type,
    name,
    "slug": slug.current,
    "header": header->{
        ${Header}
    },
    "footer": footer->{
    ${Footer}
    },
    sections
  } 
`);
