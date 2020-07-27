import React from "react" ;
import styled from "styled-components" ;

import Container from "./Container.js" ;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.text};
  margin-bottom: 3rem;
`
const Line = styled.div`
  height: 3px;
  flex-grow: 2;
  margin-left: 2rem;
  border-radius: 8px;
  background-color: ${props => props.theme.comment};
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

export const Section = ({ children }) => {
  return (
    <SectionWrapper>
      <Container>
        {children}
      </Container>
    </SectionWrapper>
  )
}
