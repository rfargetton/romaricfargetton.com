import React from 'react' ;
import Img from "gatsby-image" ;
import styled from "styled-components" ;
import { Link } from 'gatsby' ;

import Button from "./Button.js" ;
import PostTags from "./PostTags.js" ;
import List from "./List.js" ;
import { formatDate } from "../helpers/formatDate.js" ;

const Card = styled.li`
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
const PostTitle = styled.h3`
  margin: 2rem 0;
  font-size: 1.5rem;
`
const Tags = styled(PostTags)`
  transform: translateY(-30px);
`
const Read = styled(Button)`
  background-color: ${props => props.theme.background};
`

const PostList = ({ posts, columns }) => {

  console.log(posts);
  return (
    <List columns={columns}>
      {posts.map(({node: post}) => {
        return (
          <Card className="post" key={post.id}>
            <Link to={post.fields.slug}> 
              <Img 
                style={{backgroundColor: post.frontmatter.color}}
                fluid={post.frontmatter.featured_image.childImageSharp.fluid} 
              />
              <PostContent>
                <Tags tags={post.frontmatter.tags} />
                <div>Publié le {formatDate(post.frontmatter.date)} | {post.timeToRead} minutes</div>
                <PostTitle>{post.frontmatter.title}</PostTitle>
              </PostContent>
            </Link>
          </Card>
        )
      })}
    </List>
  )
}

export default PostList ;
