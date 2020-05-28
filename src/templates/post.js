import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import PostTags from "../components/PostTags.js" ;
import avatar from "../img/avatar-1.jpg" ;

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
      <Helmet title={post.frontmatter.title} /> 
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <img src={avatar} alt="romaric" />
          <p>Publié le <time dateTime={date}>{formattedDate}</time></p>
          <PostTags tags={post.frontmatter.tags} />
        </header>
        <div dangerouslySetInnerHTML={{ __html : post.html }} />
      </article>
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
        date
        tags
      }
    }
  }
`

export default Post ;
