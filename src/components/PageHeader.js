import React from "react" ;
import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather" ;

import useSocialLinks from '../hooks/SocialLinks' ;
import Container from "./Container.js" ;
import Card from "./Card.js" ;

const Wrapper = styled.section`
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
    padding: 1rem;
  }
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
  color: ${props => props.theme.secondary};
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
        <HeaderCard>
          <HeaderTxt>
            {children}
          </HeaderTxt>
        </HeaderCard>
      </Inner>
    </Wrapper>
  )

}
