import React from "react" ;
import { graphql } from "gatsby" ;

import Seo from "../components/Seo"
import Layout from "../components/Layout.js" ;
import { PageHeader, HeaderTitle, HeaderIntro } from "../components/PageHeader.js";
import { Section, SectionTitle } from "../components/Section.js" ;
import PostList from "../components/PostList.js" ;

const Blog = ({ data }) => {

  const posts = data.posts.edges ;
  const page = data.page ;

  return (
    <Layout>

      <Seo 
        title={page.frontmatter.title} 
        description={page.frontmatter.subheading}
      /> 

      <PageHeader>
        <HeaderTitle>
          {page.frontmatter.heading}
        </HeaderTitle>
        <HeaderIntro>
          {page.frontmatter.subheading}
        </HeaderIntro>
      </PageHeader>

      <Section>
        <PostList 
          posts={posts} 
          columns={3}
        />
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    page: markdownRemark (
      frontmatter: {title: {eq: "Blog"}} 
     ){
       frontmatter {
         title
         heading
         subheading
       }
     }
     posts: allMarkdownRemark(
      limit: 100,
      filter: {frontmatter: {type: {eq: "blog"}}},
      sort: {order: DESC, fields: frontmatter___date}
    ){
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            color
            date
            featured_image {
              childImageSharp {
                fluid(maxHeight: 300, maxWidth: 400, cropFocus: CENTER, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`

export default Blog ;

