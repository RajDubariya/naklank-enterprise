import { HomePageQuery } from "@/sanity/queries/pages/HomePage";
import fetchData from "@/sanity/utils/fetchdata";
import { HomePageType } from "@/types/pages/HomePage";
import HomePageView from "@/views/HomePageView";
import Layout from "../components/Layout";

export default async function Home() {
  const data: HomePageType = await fetchData(HomePageQuery);

  return (
    <Layout header={data?.header} footer={data?.footer}>
      <HomePageView sections={data?.sections} />
    </Layout>
  );
}
