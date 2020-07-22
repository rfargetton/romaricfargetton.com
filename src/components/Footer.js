import React from 'react' ;
import { Link } from 'gatsby' ;
import styled from "styled-components" ;

import Logo from './Logo.js' ;
import useSiteMetadata from '../hooks/SiteMetadata' ;
import useSocialLinks from '../hooks/SocialLinks' ;
import Container from "./Container.js" ;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.backgroundDark};
  padding: 6rem 0;
  margin-top: 6rem;
`
const Inner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
  @media (max-width: 768px){
    padding: 0 1rem;
  }
  a {
    color: white;
  }
`
const Top = styled.div`
  margin-bottom: 1rem;
  flex-basis: 100%;
  flex-shrink: 0;
`
const Title = styled.div`
  margin-bottom: 1rem;
  color: ${props => props.theme.link};
`

const FooterInfo = styled.div`
  margin-right: 2rem;
  flex-grow: 1;
`

const FooterNav = styled.nav`
  ul {
    display: inline-flex;
    flex-wrap: wrap;
    margin: -0.5rem;
  }
  li {
    margin: 0.5rem;
  }
`

const Footer = () => {

  const { title } = useSiteMetadata() ;
  const { github, email, linkedin } =  useSocialLinks() ;

  return (
    <FooterWrapper>

      <Inner>
        <Top>
          <Logo width={"40"} />
        </Top>

        <FooterInfo>
          <Title>{ title }</Title>
        </FooterInfo>

        <FooterNav>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/a-propos">À Propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a href={email.frontmatter.link}>
                {email.frontmatter.title}
              </a>
            </li>

            <li>
              <a href={github.frontmatter.link}>
                {github.frontmatter.title}
              </a>
            </li>

            <li>
              <a href={linkedin.frontmatter.link}>
                {linkedin.frontmatter.title}
              </a>
            </li>
          </ul>
        </FooterNav>

      </Inner>

    </FooterWrapper>
  )
}

export default Footer ;
