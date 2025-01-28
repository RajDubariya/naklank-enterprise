import { defineQuery } from "next-sanity";
import { FooterQuery } from "../common/Footer";
import { HeaderQuery } from "../common/Header";

export const HomePageQuery = defineQuery(`*[_type == "home"][0]{
    _id,
    _type,
    name,
    "slug": slug.current,
    "header":${HeaderQuery},
    "footer":${FooterQuery},
    sections[]{
    (_type == "hero_section") => {
        ...
    },
    (_type == "home_about_section") => {
        ...
    },  
    (_type == "home_products_section") => {
        ...
    },
    (_type == "home_projects_section") => {
        ...
    },
    (_type == "our_products_section") => {
        ...
    },
    }
  } 
`);
