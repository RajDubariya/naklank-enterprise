import { HomePageQuery } from "@/sanity/queries/pages/HomePage";
import fetchData from "@/sanity/utils/fetchdata";
import Layout from "../components/Layout";
import { HomePageType } from "@/types/pages/HomePage";
import HomePageView from "@/views/HomePageView";

export default async function Home() {
  const data: HomePageType = await fetchData(HomePageQuery);

  return (
    <Layout header={data?.header} footer={data?.footer}>
      <HomePageView sections={data?.sections} />
    </Layout>
  );
}
