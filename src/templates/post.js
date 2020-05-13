import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;

const Post = ({ data }) => {
  const { post } = data ;
  return (
    <Layout>
      <Helmet title={post.frontmatter.title} /> 
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html : post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($id: String!) {
    post: markdownRemark (
      id: {eq: $id}
    ){
      id
      html
      frontmatter {
        title
      }
    }
  }
`

export default Post ;
