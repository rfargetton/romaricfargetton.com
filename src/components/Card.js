import React from 'react' ;
import Img from "gatsby-image" ;
import styled from "styled-components" ;

const Wrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.backgroundHighlight};
`

const Card = ({ children, className }) => {
  return (
    <Wrapper
      className={className}
    >
      {children}
    </Wrapper>
  )
}

export default Card ;
