import React from "react" ;
import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather" ;

import Container from "./Container.js" ;
import { SectionWrapper } from "../components/SectionTitle.js" ;

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
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
  }
`
const HeaderTxt =  styled.div`
  flex-basis: 65%;
`
const SocialBar = styled.div`
  display: flex;
  border-radius: 8px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
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
  margin: 2rem 0;
`
export const HeaderTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 1.2;
  margin: 0;
`

export const PageHeader = ({ children, image, alt }) => {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
  )
}

