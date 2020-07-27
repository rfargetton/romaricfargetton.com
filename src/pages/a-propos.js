import React from "react" ;
import styled from "styled-components";
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import { PageHeader, HeaderTitle, HeaderIntro } from "../components/PageHeader.js";
import Content from "../components/Content.js" ;

const Body = styled.div`
  max-width: 70%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

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

      <Content>
        <Body dangerouslySetInnerHTML={{ __html : page.html }} />
      </Content>

    </Layout>
  )
}

export const query = graphql`
  query {
    page: markdownRemark (
     frontmatter: {title: {eq: "À Propos"}} 
    ){
      html
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
 
export default About ; 
