import React from "react" ;
import styled from "styled-components";

import Container from "./Container.js" ;
import { SectionWrapper } from "../components/Section.js" ;

const ContentWrapper = styled(SectionWrapper)`
  padding: 2rem 0;
`
const ContentBox = styled(Container)`
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }
  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  h1, h2, h3, h4, h5, h6, p {
    line-height: 1.5;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  ol {
    margin: 1rem 0;
    list-style: outside symbols;
    padding-left: 0.5rem;
    li {
      margin: 0.5rem ;
      padding-left: 0.5rem;
      &::marker {
        color: ${props => props.theme.link};
      }
    }
  }
  ul {
    margin: 1rem 0;
    list-style: outside;
    padding-left: 0.5rem;
    li {
      margin: 0.5rem ;
      padding-left: 0.5rem;
      &::marker {
        color: ${props => props.theme.link};
      }
    }
  }
  blockquote {
    background-color: ${props => props.theme.backgroundHighlight};
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 0;
    p {
      padding: 1rem;
      margin: 0;
      border-left: 6px solid ${props => props.theme.keyword};
    }
  }
  img {
    width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
  }
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 2px solid ${props => props.theme.backgroundHighlight};
    thead {
      text-align: left;
      background-color: ${props => props.theme.backgroundHighlight};
    }
    th, td {
      padding: 0.5rem;
    }
    td {
      border: 2px solid ${props => props.theme.backgroundHighlight};
    }
  }
  code[class*="language-"],
  pre[class*="language-"] {
    background: none;
    font-family: "Source Code Pro", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"] {
    color: ${props => props.theme.code};
    background: ${props => props.theme.backgroundDark};
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
  }

  *:not(pre) > code[class*="language-"] {
    background-color: ${props => props.theme.backgroundHighlight} ;
    color: ${props => props.theme.text};
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #636f88;
  }

  .token.punctuation {
    color: #81A1C1;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #81A1C1;
  }

  .token.number {
    color: #B48EAD;
  }

  .token.boolean {
    color: #81A1C1;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #A3BE8C;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #81A1C1;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #88C0D0;
  }

  .token.keyword {
    color: #81A1C1;
  }

  .token.regex,
  .token.important {
    color: #EBCB8B;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

const Content = ({ children, className }) => {
  return (
    <ContentWrapper
      className={className}
    >
      <ContentBox>
        {children}
      </ContentBox>
    </ContentWrapper>
  )
}

export default Content ;

