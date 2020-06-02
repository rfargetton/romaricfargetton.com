import React from "react" ;
import styled from "styled-components" ;

const Wrapper = styled.button`
  font-family: Inter, sans-serif ;
  font-weight: 600;
  display: flex;
  font-size: 1rem;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: none;
  background-color: ${props => props.theme.backgroundHighlight};
  color: ${props => props.theme.text} ;
  a {
    color: ${props => props.theme.text} ;
  }
  span {
    margin: 0 8px;
  }
`

const Button = ({ children, handleClick, className }) => {

  return (
    <Wrapper 
      onClick={handleClick}
      className={className}
    >
      {children}
    </Wrapper>
  )
}
 export default Button ;
