import Layout from "@/components/Layout";
import ContactUsForm from "@/components/pages/ContactUs/Form";
import { CombinedQuery } from "@/sanity/queries/common/Header";
import fetchData from "@/sanity/utils/fetchdata";
import React from "react";

const ContactUs = async () => {
  const data = await fetchData(CombinedQuery);
  return (
    <Layout header={data?.header} footer={data?.footer}>
      <ContactUsForm />
    </Layout>
  );
};

export default ContactUs;
