import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import Container from "../components/Container.js";
import PostTags from "../components/PostTags.js" ;

const Post = ({ data }) => {

  const { post } = data ;
  const date = post.frontmatter.date ;
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric" 
  }) ;

  return (
    <Layout>
      <Container>
        <Helmet title={post.frontmatter.title} /> 
        <article>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <img src={post.frontmatter.featured_image} alt="romaric" />
            <p>Publié le <time dateTime={date}>{formattedDate}</time></p>
            <PostTags tags={post.frontmatter.tags} />
          </header>
          <div dangerouslySetInnerHTML={{ __html : post.html }} />
        </article>
      </Container>
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
        featured_image
        title
        date
        tags
      }
    }
  }
`

export default Post ;
