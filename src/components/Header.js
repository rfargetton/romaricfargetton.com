import React, { useContext } from 'react' ;
import { Link } from 'gatsby' ;
import styled from "styled-components" ;
import { Moon, Sun } from "react-feather" ;

import { ThemeContext } from "../providers/ThemeManager.js";
import Container from "./Container.js" ;
import Logo from './Logo.js' ;
import Button from "./Button.js" ;
import useSiteMetadata from '../hooks/SiteMetadata' ;

const Nav = styled.nav`
  background-color: ${props => props.theme.backgroundDark};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`
const Wrapper = styled(Container)`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  @media (max-width: 768px){
    padding: 0 1rem;
  }
`;

const Brand = styled.div`
  a {
    display: flex;
    align-items: center;
  }
`
const NavLogo = styled(Logo)`
  margin-right: 1rem;
`
const SiteTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  display: none;
`
const activeClassName = 'active';
const NavLinkWrapper = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: end;
`
const NavLink = styled(Link).attrs({activeClassName})`
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 8px;
  color: white;
  &:hover {
    background-color: ${props => props.theme.backgroundCodeblock};
    color: ${props => props.theme.link};
  }
  &.${activeClassName}{
    background-color: ${props => props.theme.backgroundCodeblock};
  }
  @media (max-width: 768px){
    margin: 0;
  }
`;
const CTA = styled.div`
  margin-left: 1rem;
  @media (max-width: 768px){
    display: none;
  }
`
const ThemeButton = styled(Button)`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  display: flex;
`

const Header = () => {

  const { defaultTitle } = useSiteMetadata() ;
  const { theme, toggleTheme, getNextTheme } = useContext(ThemeContext);

  return (
    <Nav>
      <Wrapper>

        <Brand>
          <Link to="/">
            <NavLogo width={"40"} />
            <SiteTitle>{ defaultTitle }</SiteTitle>
          </Link>
        </Brand>

        <NavLinkWrapper>
          <NavLink activeClassName={activeClassName} to="/blog">Blog</NavLink>
          <NavLink activeClassName={activeClassName} to="/a-propos">À Propos</NavLink>
          <NavLink activeClassName={activeClassName} to="/contact">Contact</NavLink>
        </NavLinkWrapper>
          
        <CTA>
          <ThemeButton handleClick={toggleTheme}>
            { theme == "dark" ? <Sun /> : <Moon /> }
          </ThemeButton>
        </CTA>

      </Wrapper>
    </Nav>
  )
}

export default Header ;
