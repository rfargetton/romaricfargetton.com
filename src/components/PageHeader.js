import React from "react" ;
import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather" ;

import Container from "./Container.js" ;

const Outer = styled.div`
  margin: 100px 0;
`
const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between; 
`
const HeaderImg = styled.div`
  flex-basis: 25%;
  img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
`
const HeaderTxt =  styled.div`
  flex-basis: 65%;
`
const SocialBar = styled.div`
  display: flex;
  border-radius: 8px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  padding: 0 8px;
  width: min-content;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text} ;
  transform: translate(0, -20px);
  a {
    padding: 8px;
    color: ${props => props.theme.text} ;
  }
`
export const HeaderIntro = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
`
export const HeaderTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 1.2;
`

export const PageHeader = ({ children, image, alt }) => {
  return (
    <Outer>
      <Inner>
        <HeaderImg>
          <img src={image} alt={alt} />
          <SocialBar>
            <a href=""><GitHub /></a>
            <a href=""><Linkedin /></a>
            <a href=""><Mail /></a>
          </SocialBar>
        </HeaderImg>
        <HeaderTxt>
          {children}
        </HeaderTxt>
      </Inner>
    </Outer>
  )
}

