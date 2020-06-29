import React from "react" ;
import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather" ;

import useSocialLinks from '../hooks/SocialLinks' ;
import Container from "./Container.js" ;
import { Section } from "../components/Section.js" ;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between; 
`
const HeaderTxt =  styled.div`
  flex-basis: 65%;
`
export const HeaderIntro = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 2rem 0;
`
export const HeaderTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 1.3;
  margin: 0;
`

export const PageHeader = ({ children }) => {
  
  return (
    <Section>
      <Inner>
        <HeaderTxt>
          {children}
        </HeaderTxt>
      </Inner>
    </Section>
  )

}
