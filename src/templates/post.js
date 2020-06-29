import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import Container from "../components/Container.js";
import PostTags from "../components/PostTags.js" ;
import { PostHeader, HeaderInfo, HeaderTitle } from "../components/PostHeader.js";
import Content from "../components/Content.js" ;
import { formatDate } from "../helpers/formatDate.js" ;

const Post = ({ data }) => {

  const { post } = data ;
  const date = post.frontmatter.date ;

  return (
    <Layout>
      <Container>
        <Helmet title={post.frontmatter.title} /> 
        <article>
          <PostHeader
            image={post.frontmatter.featured_image.childImageSharp.fluid}
            color={post.frontmatter.color}
            alt="random"
          >
            <HeaderTitle>{post.frontmatter.title}</HeaderTitle>
            <HeaderInfo>Publié le <time dateTime={date}>{formatDate(date)}</time> | {post.timeToRead} min</HeaderInfo>
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
        color
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
