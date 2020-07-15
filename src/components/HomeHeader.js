import React from "react" ;
import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather" ;

import useSocialLinks from '../hooks/SocialLinks' ;
import Container from "./Container.js" ;

const Wrapper = styled.section`
  padding-bottom: 3rem;
  padding-top: 8rem;
  background-color: ${props => props.theme.backgroundHighlight};
`
const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  @media (max-width: 768px) {
    flex-flow: column-reverse wrap;
    align-items: flex-start;
  }
`
const HeaderImg = styled.div`
  flex: 0 0 auto;
  width: 15rem;
  img {
    width: 100%;
    border-radius: 50%;
  }
  @media (max-width: 768px){
    margin-bottom: 2rem;
    width: 10rem;
  }
`
const HeaderTxt =  styled.div`
  flex: 0 0 65%;
  @media (max-width: 768px){
    flex: 1 1 65%;
  }
`
const SocialBar = styled.div`
  display: flex;
  border-radius: 8px;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 0 8px;
  width: min-content;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text} ;
  transform: translate(0, -20px);
  a {
    padding: 8px;
    color: ${props => props.theme.text} ;
    display: flex;
    align-items: end;
  }
`
export const HeaderIntro = styled.p`
  font-size: 1.15rem;
  line-height: 1.5;
  margin: 2rem 0;
`
export const HeaderTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  margin: 0;
`

export const HomeHeader = ({ children, image, alt }) => {
  
  const { github, email, linkedin } =  useSocialLinks() ;

  return (
    <Wrapper>
      <Inner>
        <HeaderTxt>
          {children}
        </HeaderTxt>
        <HeaderImg>
          <img src={image} alt={alt} />
          <SocialBar>
              <a 
                href={github.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a 
                href={linkedin.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a 
                href={email.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <Mail />
              </a>
          </SocialBar>
        </HeaderImg>
      </Inner>
    </Wrapper>
  )
}

