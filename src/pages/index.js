import React from "react" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import PostList from "../components/PostList.js" ;

const Home = ({ data }) => {

  const posts = data.posts.edges ;
  const page = data.page ;

  return (
    <Layout>
      <h1>{page.frontmatter.heading}</h1>
      <p>{page.frontmatter.subheading}</p>
      <PostList 
        posts={posts} 
      />
    </Layout>
  )

}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      limit: 10,
      filter: {frontmatter: {type: {eq: "blog"}}}
    ){
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    page: markdownRemark(
      frontmatter: {title: {eq: "home"}}
    ){
      frontmatter {
        heading
        subheading
      }
    }
  }
`

export default Home ;
