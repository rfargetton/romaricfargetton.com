import React from 'react' ;
import styled from "styled-components" ;

const Wrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
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
