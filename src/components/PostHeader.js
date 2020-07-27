import React from "react" ;
import Img from "gatsby-image" ;
import styled from "styled-components";

import Container from "./Container.js" ;

const Wrapper = styled.header`
  padding-top: 8rem;
  position: relative;
  z-index: 2;
`
const Inner = styled(Container)`
  min-height: 240px;
  display: flex;
  box-sizing: border-box;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between; 
  padding: 2rem;
  background-color: ${props => props.theme.backgroundHighlight};
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    flex-flow: column-reverse wrap;
    align-items: flex-start;
    padding: 1rem;
  }
`
const HeaderImg = styled.div`
  flex: 0 0 auto;
  width: 15rem;
  div {
    width: 100%;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
  @media (max-width: 768px){
    margin-bottom: 1rem;
    width: 10rem;
  }
`
const HeaderTxt =  styled.div`
  flex-basis: 65%;
`
export const HeaderInfo = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  color: ${props => props.theme.purple};
`
export const HeaderTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  margin: 1rem 0;
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

