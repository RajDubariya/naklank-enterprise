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
    }

  } 
`);

// sections[]{
//     (_type == "search_section") => {
//         ${SearchSectionString}
//     },
//     (_type == "recent_blogs_section") => {
//       ...
//     },
//     (_type == "editors_blogs_section") => {
//         ${BlogSectionString}
//     },
//     (_type == "blogs_section") => {
//        ${BlogSectionString}
//     },
// },seo{
//     ${SeoString}
// }
