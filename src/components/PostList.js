import React from 'react' ;
import Img from "gatsby-image" ;
import styled from "styled-components" ;
import { Link } from 'gatsby' ;

import Button from "./Button.js" ;
import PostTags from "./PostTags.js" ;
import List from "./List.js" ;
import Card from "./Card.js" ;
import { formatDate } from "../helpers/formatDate.js" ;

const PostCard = styled(Card)`
  position: relative;
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
  time {
    color: ${props => props.theme.link};
  }
`

const PostList = ({ posts, columns }) => {


  return (
    <List columns={columns}>
      {posts.map(({node: post}) => {
        return (
          <li className="post" key={post.id}>
            <PostCard>
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
                <Meta>Publié le <b><time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time></b></Meta>
              </PostContent>
            </PostCard>
          </li>
        )
      })}
    </List>
  )
}

export default PostList ;
