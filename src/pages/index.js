import React, { useState } from "react" ;
import { graphql, Link } from "gatsby" ;
import styled from "styled-components" ;

import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js" ;
import Container from "../components/Container.js" ;
import { HomeHeader, HeaderIntro, HeaderTitle } from "../components/HomeHeader.js" ;
import { Section, SectionTitle } from "../components/Section.js" ;
import ServiceList from "../components/ServiceList.js" ;
import Button from "../components/Button.js" ;
import PostList from "../components/PostList.js" ;
import ProjectList from "../components/ProjectList.js" ;

const Home = ({ data }) => {

  const posts = data.posts.edges ;
  const projects = data.projects.edges ;
  const page = data.page ;

  return (
    <Layout>

      <Seo title={"Romaric Fargetton – Développeur Front-end | Designer | Formateur "}/>

      <HomeHeader 
        image={page.frontmatter.avatar.childImageSharp.fluid} 
        alt="romaric"
      >
        <HeaderTitle>{page.frontmatter.heading}</HeaderTitle>
        <HeaderIntro>{page.frontmatter.subheading}</HeaderIntro>
        <Button>
          <Link to="/a-propos"><span>En savoir plus</span></Link>
        </Button>
      </HomeHeader>

      <Section>
        <SectionTitle>
          <h2>Services</h2>
        </SectionTitle>
        <ServiceList 
          columns={4}
        /> 
      </Section>
      
      <Section>
        <SectionTitle>
          <h2>Projets</h2>
        </SectionTitle>
        <ProjectList
          projects={projects} 
          columns={1}
        />
      </Section>

      <Section>
        <SectionTitle>
          <h2>Articles récents</h2>
        </SectionTitle>
        <PostList 
          posts={posts} 
          columns={3}
        />
      </Section>

    </Layout>
  )

}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      limit: 3,
      filter: {frontmatter: {type: {eq: "blog"}}},
      sort: {order: DESC, fields: frontmatter___date}
    ){
      edges {
        node {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            color
            date
            featured_image {
              childImageSharp {
                fluid(maxHeight: 300, maxWidth: 400, cropFocus: CENTER, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            tags
          }
        }
      }
    }
    projects: allMarkdownRemark(
      limit: 9,
      filter: {frontmatter: {type: {eq: "project"}}},
      sort: {order: DESC, fields: frontmatter___date}
    ){
      edges {
        node {
          id
          html
          frontmatter {
            title
            repo
            link
            featured_image {
              childImageSharp {
                fluid(maxHeight: 300, maxWidth: 400, cropFocus: CENTER, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            tags
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
        avatar {
          childImageSharp {
            fluid(maxHeight: 400, maxWidth: 400, cropFocus: CENTER, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default Home ;
