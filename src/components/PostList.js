import React from 'react' ;
import styled from "styled-components" ;
import { Link, graphql } from 'gatsby' ;
import { Eye } from "react-feather";

import Button from "./Button.js" ;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 16px;
  margin: 2rem 0;
`
const Item = styled.li`
  border-radius: 8px;
  padding: 16px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 8px;
  background-color: ${props => props.theme.backgroundHighlight};
  img {
    width: 100%;
  }
  a {
    color: ${props => props.theme.text};
  }
`

const PostList = ({ posts, columns }) => {

  console.log(posts);
  return (
    <List columns={columns}>
      {posts.map(({node: post}) => {
        return (
          <Item className="post" key={post.id}>
            <Link to={post.fields.slug}> 
              <img src={post.frontmatter.featured_image} />
              <h3>{post.frontmatter.title}</h3>
              <p>{post.excerpt}</p>
              <Button>
                <Eye />
                <span>Lire l'article</span>
              </Button>
            </Link>
          </Item>
        )
      })}
    </List>
  )
}

export default PostList ;
