import React from 'react' ;
import styled from "styled-components" ;
import { Link, graphql } from 'gatsby' ;

const List = styled.ul`
  padding: 0;
`
const Item = styled.li`
  list-style: none;
`

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <List className="post-list">
      {posts.map(({node: post}) => {
        return (
          <Item className="post" key={post.id}>
            <Link to={post.fields.slug}> 
              <h3>{post.frontmatter.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          </Item>
        )
      })}
    </List>
  )
}

export default PostList ;
