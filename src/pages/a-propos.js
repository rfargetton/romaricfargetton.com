import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import { PageHeader, HeaderTitle, HeaderIntro } from "../components/PageHeader.js";

const About = ({ data }) => {

  const page = data.page ;

  return (
    <Layout>

      <Helmet title={page.frontmatter.title} /> 

      <PageHeader>
        <HeaderTitle>
          {page.frontmatter.heading}
        </HeaderTitle>
        <HeaderIntro>
          {page.frontmatter.subheading}
        </HeaderIntro>
      </PageHeader>

    </Layout>
  )
}

export const query = graphql`
  query {
    page: markdownRemark (
     frontmatter: {title: {eq: "À Propos"}} 
    ){
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
 
export default About ; 
