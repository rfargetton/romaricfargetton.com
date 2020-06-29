import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import { PageHeader, HeaderTitle, HeaderIntro } from "../components/PageHeader.js";

const Blog = ({ data }) => {
  return (
    <Layout>
      <PageHeader>
        <HeaderTitle>
          {"Blog"}
        </HeaderTitle>
        <HeaderIntro>
          {"Retrouvez ici mes derniers articles concernant JavaScript, React, le dévelopement web et le design d'interface en général."}
        </HeaderIntro>
      </PageHeader>
    </Layout>
  )
}

export default Blog ;

