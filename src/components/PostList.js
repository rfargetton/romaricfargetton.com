import React from 'react' ;
import styled from "styled-components" ;
import { Link, graphql } from 'gatsby' ;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 16px;
`
const Item = styled.li`
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 8px;
`

const PostList = ({ posts, columns }) => {
  console.log(posts);
  return (
    <List columns={columns}>
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
