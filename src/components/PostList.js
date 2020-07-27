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
  position: relative;
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
  margin-bottom: 2rem ;
  font-size: 1.25rem;
  a::after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
const Tags = styled(PostTags)`
  transform: translateY(-30px);
  z-index: 1;
  position: relative;
`
const Meta = styled.div`
  color: ${props => props.theme.purple};
`

const PostList = ({ posts, columns }) => {

  return (
    <List columns={columns}>
      {posts.map(({node: post}) => {
        return (
          <Card className="post" key={post.id}>
              <Img 
                style={{backgroundColor: post.frontmatter.color}}
                fluid={post.frontmatter.featured_image.childImageSharp.fluid} 
              />
              <PostContent>
                <Tags tags={post.frontmatter.tags} />
                <PostTitle>
                  <Link to={post.fields.slug}> 
                    {post.frontmatter.title}
                  </Link>
                </PostTitle>
                <Meta>Publié le <b>{formatDate(post.frontmatter.date)}</b></Meta>
              </PostContent>
          </Card>
        )
      })}
    </List>
  )
}

export default PostList ;
