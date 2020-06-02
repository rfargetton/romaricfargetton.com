import React from 'react' ;
import { Link } from 'gatsby' ;
import styled from "styled-components" ;

import useSiteMetadata from '../hooks/SiteMetadata' ;
import useSocialLinks from '../hooks/SocialLinks' ;
import Container from "./Container.js" ;

const FooterWrapper = styled.footer`
  padding: 6rem 0;
`
const Inner = styled(Container)`
  display: flex;
`
const Brand = styled.div`
  flex-basis: 50%;
`
const FooterNav = styled.div`
  flex-basis: 25%
`
const FooterSocial = styled.div`
  flex-basis: 25%;
`

const Footer = () => {

  const { title } = useSiteMetadata() ;
  const [email, linkedin, github] =  useSocialLinks() ;

  return (
    <FooterWrapper>

      <Inner>
        <Brand>
          <Link to="/">
            { title }
          </Link>
        </Brand>

        <FooterNav>
          <ul>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/a-propos">À Propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </FooterNav>

        <FooterSocial>
          <ul>

            <li>
              <a href={email.node.frontmatter.link}>
                {email.node.frontmatter.title}
              </a>
            </li>

            <li>
              <a href={github.node.frontmatter.link}>
                {github.node.frontmatter.title}
              </a>
            </li>

            <li>
              <a href={linkedin.node.frontmatter.link}>
                {linkedin.node.frontmatter.title}
              </a>
            </li>

          </ul>
        </FooterSocial>

      </Inner>

    </FooterWrapper>
  )
}

export default Footer ;
