import React from "react" ;
import Img from "gatsby-image" ;
import styled from "styled-components";

import Card from "./Card.js" ;
import Container from "./Container.js" ;

const Wrapper = styled.header`
  padding-top: 8rem;
  position: relative;
  z-index: 2;
`
const Inner = styled(Container)`
  min-height: 240px;
  box-sizing: border-box;
`
const HeaderCard = styled(Card)`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 2rem;
  @media (max-width: 768px) {
    flex-flow: column-reverse wrap;
    align-items: flex-start;
    padding: 1rem;
  }
`
const HeaderImg = styled.div`
  flex: 1 0 auto;
  width: 15rem;
  div {
    width: 100%;
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
  time {
    color: ${props => props.theme.link};
  }
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
        <HeaderCard>
          <HeaderTxt>
            {children}
          </HeaderTxt>
          <HeaderImg color={color}>
            <Img fluid={image} />
          </HeaderImg>
        </HeaderCard>
      </Inner>
    </Wrapper>
  )
}

