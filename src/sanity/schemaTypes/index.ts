import { type SchemaTypeDefinition } from "sanity";
import { Link } from "./common/objects/Link";
import { Header } from "./common/Header";
import { CustomImage } from "./common/objects/CustomImage";
import { HomePage } from "./pages/HomePage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Link, Header, CustomImage,HomePage],
};
