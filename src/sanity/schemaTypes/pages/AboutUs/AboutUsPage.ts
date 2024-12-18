import { StickyNote } from "lucide-react";
import { defineField, defineType } from "sanity";

export const AboutUsPage = defineType({
  name: "aboutus",
  title: "About Us Page",
  type: "document",
  icon: StickyNote,
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    // {
    //   name: "seo",
    //   title: "SEO",
    // },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Page Name",
      type: "string",
      description: "Only used for CMS.",
      validation: (Rule) => Rule.required(),
      group: "main",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      validation: (Rule) => Rule.required(),
      group: "main",
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      validation: (Rule) => Rule.required(),
      group: "main",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The URL slug for the page (e.g., /, /about).",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: "main",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      description: "Section that make up the page.",
      of: [
        { type: "about_us_title" },
        { type: "company_album" },
        { type: "facts_sheet" },
        { type: "company_images" },
      ],
      group: "main",
    }),
    // defineField({
    //   name: "seo",
    //   title: "SEO",
    //   group: "seo",
    //   type: "seo",
    // }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle === "/" ? "/" : `/${subtitle}`,
      };
    },
  },
});
