import React from "react" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import PostList from "../components/PostList.js" ;

const Tag = ({ data, pageContext }) => {

  const tag =  pageContext.tag ;
  const posts = data.posts.edges ;

  return (
    <Layout>
      <h1>{tag}</h1>
      <PostList 
        posts={posts} 
      />
    </Layout>
  )
}

export const query = graphql`
  query TagPosts($tag: String!) {
    posts: allMarkdownRemark (
      filter: {frontmatter: {tags: {in: [$tag]}}}
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
  }
`

export default Tag ;

