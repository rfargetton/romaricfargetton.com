import React from "react" ;
import styled from "styled-components";
import { graphql } from "gatsby" ;

import Seo from "../components/Seo.js"
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

      <Seo 
        title={post.frontmatter.title} 
        description={post.excerpt}
        image={post.frontmatter.featured_image.childImageSharp.fluid.src}
      /> 

      <article>
        <PostHeader
          image={post.frontmatter.featured_image.childImageSharp.fluid}
          color={post.frontmatter.color}
          alt="random"
        >
          <HeaderInfo>Publié le <b><time dateTime={date}>{formatDate(date)}</time></b> | {post.timeToRead} min</HeaderInfo>
          <HeaderTitle>{post.frontmatter.title}</HeaderTitle>
          <PostTags tags={post.frontmatter.tags} />
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
      excerpt
      frontmatter {
        color
        featured_image {
          childImageSharp {
            fluid(maxHeight: 300, maxWidth: 400, cropFocus: CENTER, quality: 90) {
              src
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
