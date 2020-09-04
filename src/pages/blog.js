import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import { PageHeader, HeaderTitle, HeaderIntro } from "../components/PageHeader.js";
import { Section, SectionTitle } from "../components/Section.js" ;
import PostList from "../components/PostList.js" ;

const Blog = ({ data }) => {

  const posts = data.posts.edges ;

  return (
    <Layout>
      <Helmet title={"Blog"} /> 

      <PageHeader>
        <HeaderTitle>
          {"Blog"}
        </HeaderTitle>
        <HeaderIntro>
          {"Retrouvez ici mes derniers articles concernant JavaScript, React, le dévelopement web et le design d'interface en général."}
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

