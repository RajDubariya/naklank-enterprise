import { defineQuery } from "next-sanity";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

export const HomePageQuery = defineQuery(`*[_type == "home"][0]{
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
    (_type == "home_hsn_section") => {
        ...
    },  
    }

  } 
`);
