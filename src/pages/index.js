import React from "react" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import PostList from "../components/PostList.js" ;

const Home = ({ data }) => {

  const posts = data.posts.edges ;

  return (
    <Layout>
      <h1>Hello World !</h1>
      <PostList posts={posts} />
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
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Home ;
