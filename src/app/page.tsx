import { HomePageQuery } from "@/sanity/queries/pages/HomePage";
import fetchData from "@/sanity/utils/fetchdata";
import Layout from "./components/Layout";

export default async function Home() {
  const data = await fetchData(HomePageQuery);

  return (
    <>
      <Layout header={data?.header}></Layout>
    </>
  );
}
