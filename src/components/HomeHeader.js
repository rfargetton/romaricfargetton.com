import React from "react" ;
import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather" ;

import useSocialLinks from '../hooks/SocialLinks' ;
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
  }
`
const HeaderTxt =  styled.div`
  flex-basis: 65%;
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
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 2rem 0;
`
export const HeaderTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 1.2;
  margin: 0;
`

export const HomeHeader = ({ children, image, alt }) => {
  
  const [ github, email, linkedin] =  useSocialLinks() ;

  return (
    <SectionWrapper>
      <Inner>
        <HeaderImg>
          <img src={image} alt={alt} />
          <SocialBar>
              <a 
                href={github.node.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a 
                href={linkedin.node.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
              <a 
                href={email.node.frontmatter.link}
                target="_blank"
                rel="noreferrer"
              >
                <Mail />
              </a>
          </SocialBar>
        </HeaderImg>
        <HeaderTxt>
          {children}
        </HeaderTxt>
      </Inner>
    </SectionWrapper>
  )
}

