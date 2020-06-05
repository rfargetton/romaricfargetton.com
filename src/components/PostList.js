import React from 'react' ;
import Img from "gatsby-image" ;
import styled from "styled-components" ;
import { Link, graphql } from 'gatsby' ;
import { Eye } from "react-feather";

import Button from "./Button.js" ;
import PostTags from "./PostTags.js" ;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 1rem;
  margin: 3rem 0;
`
const Item = styled.li`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.backgroundHighlight};
  img {
    width: 100%;
  }
  a {
    color: ${props => props.theme.text};
  }
`
const PostContent = styled.div`
  padding: 1rem;
  p {
    margin: 1rem 0;
  }
`

const PostList = ({ posts, columns }) => {

  console.log(posts);
  return (
    <List columns={columns}>
      {posts.map(({node: post}) => {
        return (
          <Item className="post" key={post.id}>
            <Link 
              key={post.fields.slug}
              to={post.fields.slug}
            > 
              <Img fluid={post.frontmatter.featured_image.childImageSharp.fluid} />
              <PostContent>
                <h3>{post.frontmatter.title}</h3>
                <p>{post.excerpt}</p>
                <PostTags tags={post.frontmatter.tags} />
              </PostContent>
            </Link>
          </Item>
        )
      })}
    </List>
  )
}

export default PostList ;
