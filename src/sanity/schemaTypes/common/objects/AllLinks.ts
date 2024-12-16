import { defineField, defineType } from "sanity";

export const AllLinks = defineType({
  name: "alllinks",
  title: "All Links",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name Of Link Group.",
      type: "string",
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "singlelink" }],
    }),
  ],
});
