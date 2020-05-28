import React, { useState } from "react" ;
import { graphql } from "gatsby" ;
import styled from "styled-components" ;

import Layout from "../components/Layout.js" ;
import Container from "../components/Container.js" ;
import { PageHeader, HeaderIntro, HeaderTitle } from "../components/PageHeader.js" ;
import PostList from "../components/PostList.js" ;
import avatar from "../img/avatar-1.jpg" ;

const Home = ({ data }) => {

  const posts = data.posts.edges ;
  const page = data.page ;

  return (
    <Layout>
      <PageHeader 
        image={avatar} 
        alt="romaric"
      >
        <HeaderTitle>{page.frontmatter.heading}</HeaderTitle>
        <HeaderIntro>{page.frontmatter.subheading}</HeaderIntro>
      </PageHeader>
      <Container>
        <h2>Articles récents</h2>
        <hr></hr>
        <PostList 
          posts={posts} 
        />
      </Container>
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
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    page: markdownRemark(
      frontmatter: {title: {eq: "home"}}
    ){
      frontmatter {
        heading
        subheading
      }
    }
  }
`

export default Home ;
