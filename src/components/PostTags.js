import React from "react" ;
import _ from "lodash" ;
import styled from "styled-components" ;
import { Link } from 'gatsby' ;

const Wrapper = styled.ul`
  margin: -0.25rem;
  display: flex;
`
const Tag = styled(Link)`
  padding: 0.5rem;  
  border-radius: 8px;
  margin: 0.25rem;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.backgroundHighlight};
`

const PostTags = ({ tags }) => {
  return (
    <Wrapper>
      {tags &&
        tags.map(tag => (
          <Tag 
            key={tag} 
            to={`/tags/${_.kebabCase(tag)}/`}
          >
            {tag}
          </Tag>
      ))}
    </Wrapper>
  )
}

export default PostTags ;
