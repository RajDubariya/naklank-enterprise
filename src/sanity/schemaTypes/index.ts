import { type SchemaTypeDefinition } from "sanity";
import { Link } from "./common/objects/Link";
import { Header } from "./common/Header";
import { CustomImage } from "./common/objects/CustomImage";
import { HomePage } from "./pages/HomePage";
import { AllLinks } from "./common/objects/AllLinks";
import { Footer } from "./common/Footer";
import { SingleLink } from "./common/objects/SingleLink";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Link, AllLinks, SingleLink, CustomImage, Header, Footer, HomePage],
};
