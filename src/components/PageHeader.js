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
`
const HeaderTxt =  styled.div`
  flex: 0 0 65%;
  @media (max-width: 768px){
    flex: 1 1 65%;
  }
`
export const HeaderIntro = styled.p`
  font-size: 1.15rem;
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
    <Wrapper>
      <Inner>
        <HeaderTxt>
          {children}
        </HeaderTxt>
      </Inner>
    </Wrapper>
  )

}
