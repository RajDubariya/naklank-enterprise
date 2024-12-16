import { PanelBottom } from "lucide-react";
import { defineField, defineType } from "sanity";

export const Footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: PanelBottom,
  fields: [
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "custom_image",
    }),
    defineField({
      name: "slogan",
      title: "Slogan",
      type: "string",
    }),
    defineField({
      name: "eula",
      title: "End User License Agreement",
      type: "string",
    }),
    defineField({
      name: "footerlinks",
      title: "All Footer Links",
      type: "array",
      description: "Links for Footer.",
      of: [{ type: "alllinks" }],
    }),
    defineField({
      name: "contactDetails",
      title: "Contact Details",
      type: "array",
      of: [{ type: "string" }],
      description: "Contact details like email, phone number.",
    }),
  ],
});
