import React from "react" ;
import Img from "gatsby-image" ;
import styled from "styled-components";

import Container from "./Container.js" ;

const Wrapper = styled.header`
  padding-bottom: 3rem;
  padding-top: 8rem;
  background-color: ${props => props.theme.backgroundHighlight};
`
const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  @media (max-width: 780px) {
    flex-flow: column-reverse wrap;
    align-items: flex-start;
  }
`
const HeaderImg = styled.div`
  flex: 0 0 auto;
  width: 15rem;
  div {
    width: 100%;
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.color};
  }
  @media (max-width: 780px){
    margin-bottom: 2rem;
    width: 10rem;
  }
`
const HeaderTxt =  styled.div`
  flex-basis: 65%;
`
export const HeaderInfo = styled.div`
  font-size: 1rem;
  margin: 1rem 0;
`
export const HeaderTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  margin: 0;
`

export const PostHeader = ({ children, image, color, alt }) => {
  return (
    <Wrapper>
      <Inner>
        <HeaderTxt>
          {children}
        </HeaderTxt>
        <HeaderImg color={color}>
          <Img fluid={image} />
        </HeaderImg>
      </Inner>
    </Wrapper>
  )
}

