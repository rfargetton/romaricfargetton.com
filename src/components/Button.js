import React from "react" ;
import styled from "styled-components" ;

const Wrapper = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border: none;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text} ;
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
