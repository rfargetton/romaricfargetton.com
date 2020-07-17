import React from "react" ;
import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather" ;

import useSocialLinks from '../hooks/SocialLinks' ;
import Container from "./Container.js" ;

const Wrapper = styled.section`
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
  margin-top: 2rem;
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
