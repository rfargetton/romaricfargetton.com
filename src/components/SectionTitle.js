import React from "react" ;
import styled from "styled-components" ;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Line = styled.div`
  height: 2px;
  background-color: ${props => props.theme.text};
  flex-grow: 2;
  margin-left: 2rem;
`
export const SectionWrapper = styled.section`
  padding: 3rem 0;
`

export const SectionTitle = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Line />
    </Wrapper>
  )
}

