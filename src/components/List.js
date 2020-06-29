import React from "react" ;
import styled from "styled-components" ;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 1rem;
  margin-top: 6rem;
`

export default List ;
