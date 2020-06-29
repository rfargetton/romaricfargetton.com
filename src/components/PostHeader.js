import React from "react" ;
import Img from "gatsby-image" ;
import styled from "styled-components";

import Container from "./Container.js" ;

const Wrapper = styled.header`
  padding: 3rem 0;
`
const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between; 
`
const HeaderImg = styled.div`
  flex-basis: 25%;
  div {
    width: 100%;
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.color};
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
  font-size: 2.25rem;
  line-height: 1.3;
  margin: 0;
`

export const PostHeader = ({ children, image, color, alt }) => {
  return (
    <Wrapper>
      <Inner>
        <HeaderImg color={color}>
          <Img fluid={image} />
        </HeaderImg>
        <HeaderTxt>
          {children}
        </HeaderTxt>
      </Inner>
    </Wrapper>
  )
}

