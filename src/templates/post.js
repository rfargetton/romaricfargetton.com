import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import Container from "../components/Container.js";
import PostTags from "../components/PostTags.js" ;
import { PostHeader, HeaderInfo, HeaderTitle } from "../components/PostHeader.js";
import Content from "../components/Content.js" ;

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
          <PostHeader
            image={post.frontmatter.featured_image.childImageSharp.fluid}
            alt="random"
          >
            <HeaderTitle>{post.frontmatter.title}</HeaderTitle>
            <HeaderInfo>Publié le <time dateTime={date}>{formattedDate}</time> | {post.timeToRead} min</HeaderInfo>
            <PostTags tags={post.frontmatter.tags} />
          </PostHeader>
          <Content>
            <div dangerouslySetInnerHTML={{ __html : post.html }} />
          </Content>
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
      timeToRead
      frontmatter {
        featured_image {
          childImageSharp {
            fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        date
        tags
      }
    }
  }
`

export default Post ;
