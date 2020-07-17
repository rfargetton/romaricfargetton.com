import React from "react" ;
import styled from "styled-components" ;

const Wrapper = styled.button`
  font-family: Inter, sans-serif ;
  font-weight: 600;
  font-size: 1rem;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: none;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.link} ;
  a {
    color: ${props => props.theme.link} ;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
   margin: 0 0.5rem;
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
