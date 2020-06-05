import React from "react" ;
import styled from "styled-components";

import Container from "./Container.js" ;
import { SectionWrapper } from "../components/SectionTitle.js" ;

const ContentBox = styled(Container)`
  background-color: ${props => props.theme.backgroundHighlight};
  border-radius: 8px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  div {
    max-width: 760px;
    margin: 0 auto;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 2rem 0;
    line-height: 1.5;
  }
  h1, h2, h3, h4 {
    color: ${props => props.theme.link};
  }
  p {
    font-size: 1rem;
  }
  blockquote {
    background-color: ${props => props.theme.background};
    border-radius: 8px;
    font-weight: 600;
    margin: 0;
    padding: 1.5rem;
    p {
      font-size: 1.15rem;
    }
  }
  .gatsby-highlight {
    background-color: ${props => props.theme.background};
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
    line-height: 1.5;
    font-size: 1rem;
    overflow: scroll;
    .token.keyword {
      color: ${props => props.theme.link};
    }
    .token.string {
      color: green;
    }
    .token.number {
      color: purple;
    }
      

  }
`

const Content = ({ children }) => {
  return (
    <SectionWrapper>
      <ContentBox>
        {children}
      </ContentBox>
    </SectionWrapper>
  )
}

export default Content ;

