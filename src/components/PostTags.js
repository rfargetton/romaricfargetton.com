import React from "react" ;
import _ from "lodash" ;
import styled from "styled-components" ;
import { Link } from 'gatsby' ;

const Wrapper = styled.ul`
  margin: -0.25rem;
  display: flex;
`
const Tag = styled.li`
  font-size: 0.85rem;
  padding: 0.5rem;  
  border-radius: 8px;
  margin: 0.25rem;
  background-color: ${props => props.theme.background};
  a {
    margin: 0 0.5rem;
    color: ${props => props.theme.link} !important;
  }
`

const PostTags = ({ tags, className }) => {
  return (
    <Wrapper className={className}>
      {tags &&
        tags.map(tag => (
          <Tag 
            key={tag} 
          >
            <Link
              to={`/tags/${_.kebabCase(tag)}/`}
            >
              {_.startCase(tag)}
            </Link>
          </Tag>
      ))}
    </Wrapper>
  )
}

export default PostTags ;
