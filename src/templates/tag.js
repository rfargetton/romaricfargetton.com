import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import PostList from "../components/PostList.js" ;

const Tag = ({ data, pageContext }) => {

  const tag =  pageContext.tag ;
  const formattedTag = tag[0].toUpperCase() + tag.slice(1)
  const posts = data.posts.edges ;

  return (
    <Layout>
      <Helmet title={formattedTag} /> 
      <h1>{formattedTag}</h1>
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

