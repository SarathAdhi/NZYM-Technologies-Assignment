import Head from "next/head";
import React from "react";
import { Component } from "types/component";

type Props = {
  title: string;
} & Component;

const PageLayout: React.FC<Props> = ({ title, className, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Faker API to fetch all person details and display in a Custom Table"
        />
        <meta name="og:title" property="og:title" content={title} />
      </Head>

      <main className={className}>{children}</main>
    </>
  );
};

export default PageLayout;
