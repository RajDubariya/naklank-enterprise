import Section from "@/components/common/Section";
import Layout from "@/components/Layout";
import { PageQuery } from "@/sanity/queries/common/Page";
import fetchData from "@/sanity/utils/fetchdata";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params)?.slug;
  const data = await fetchData(PageQuery, { slug });
  if (!data) {
    notFound();
  }

  return (
    <Layout header={data?.header} footer={data?.footer}>
      <Section sections={data?.sections} />
    </Layout>
  );
}
