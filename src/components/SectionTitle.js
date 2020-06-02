import React from "react" ;
import styled from "styled-components" ;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Line = styled.div`
  height: 3px;
  flex-grow: 2;
  margin-left: 2rem;
  border-radius: 8px;
  background-color: ${props => props.theme.backgroundHighlight};
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

