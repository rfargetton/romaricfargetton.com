import React from "react" ;
import styled from "styled-components";

import Container from "./Container.js" ;
import { SectionWrapper } from "../components/Section.js" ;

const ContentWrapper = styled(SectionWrapper)`
  padding: 2rem 0;
`
const ContentBox = styled(Container)`
  > div {
    max-width: 65%;
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
  code[class*="language-"] {
    font-family: Source Code Pro ;
  }
  p {
    font-size: 1rem;
    code[class*="language-"] {
      background-color: ${props => props.theme.backgroundHighlight};
      padding: 0 0.25rem;
      border-radius: 0.25rem;
    }
  }
  ol {
    counter-reset: ol;
    li::before {
      color: ${props => props.theme.comment};
      counter-increment: ol;
      content: counter(ol);
      margin-right: 1rem;
    }
  }
  ul {
    li::before {
      color: ${props => props.theme.comment};
      content: "•";
      margin-right: 1rem;
    }
  }
  blockquote {
    font-weight: 500;
    margin: 0;
    padding-left: 1.5rem;
    border-left: 4px solid ${props => props.theme.keyword};
    color: ${props => props.theme.keyword};
  }
  .gatsby-highlight {
    background-color: ${props => props.theme.backgroundCodeblock};
    color: ${props => props.theme.code};
    box-shadow: 3px 3px 9px 0px ${props => props.theme.background};
    margin: 2rem 0;
    padding: 1.5rem;
    border-radius: 8px;
    overflow: auto;
    pre[class*="language-"] {
      line-height: 1.5;
      font-size: 1rem;
      word-break: normal;
    }
    .token.keyword, .token.punctuation 
    .token.operator, .token.tag, .token.boolean {
      color: ${props => props.theme.keyword};
    }
    .token.comment {
      color: ${props => props.theme.comment};
    }
    .token.string, .token.char {
      color: ${props => props.theme.string};
    }
    .token.number {
      color: ${props => props.theme.number};
    }
    .token.class-name, .token.function, .token.function-name {
      color: ${props => props.theme.function};
    }
  }
`

const Content = ({ children }) => {
  return (
    <ContentWrapper>
      <ContentBox>
        {children}
      </ContentBox>
    </ContentWrapper>
  )
}

export default Content ;

