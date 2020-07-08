import React from "react" ;
import _ from "lodash" ;
import styled from "styled-components" ;
import { Link } from 'gatsby' ;

const Wrapper = styled.ul`
  margin: -0.25rem;
  display: flex;
`
const Tag = styled(Link)`
  font-size: 0.85rem;
  padding: 0.5rem;  
  border-radius: 8px;
  margin: 0.25rem;
  background-color: ${props => props.theme.background};
  span {
   margin: 0 0.5rem;
  }
`

const PostTags = ({ tags, className }) => {
  return (
    <Wrapper className={className}>
      {tags &&
        tags.map(tag => (
          <Tag 
            key={tag} 
            to={`/tags/${_.kebabCase(tag)}/`}
          >
            <span>{_.startCase(tag)}</span>
          </Tag>
      ))}
    </Wrapper>
  )
}

export default PostTags ;
