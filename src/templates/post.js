import React from "react" ;
import styled from "styled-components";
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;
import Container from "../components/Container.js";
import PostTags from "../components/PostTags.js" ;
import { PostHeader, HeaderInfo, HeaderTitle } from "../components/PostHeader.js";
import Content from "../components/Content.js" ;
import { formatDate } from "../helpers/formatDate.js" ;

const Body = styled.div`
  max-width: 70%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const Post = ({ data }) => {

  const { post } = data ;
  const date = post.frontmatter.date ;

  return (
    <Layout>
      <Helmet title={post.frontmatter.title} /> 
      <article>
        <PostHeader
          image={post.frontmatter.featured_image.childImageSharp.fluid}
          color={post.frontmatter.color}
          alt="random"
        >
          <PostTags tags={post.frontmatter.tags} />
          <HeaderTitle>{post.frontmatter.title}</HeaderTitle>
          <HeaderInfo>Publié le <b><time dateTime={date}>{formatDate(date)}</time></b> | {post.timeToRead} min</HeaderInfo>
        </PostHeader>
        <Content>
          <Body dangerouslySetInnerHTML={{ __html : post.html }} />
        </Content>
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
      timeToRead
      frontmatter {
        color
        featured_image {
          childImageSharp {
            fluid(maxHeight: 500, maxWidth: 500, cropFocus: CENTER, quality: 90) {
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
