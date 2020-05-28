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
`
const Wrapper = styled(Container)`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.text} ;
    &:hover {
    }
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
  padding: 1rem;
  color: ${props => props.theme.text} ;
  &:hover {
  }
  &.${activeClassName}{
    color: ${props => props.theme.text} ;
  }
`;
const CTA = styled.div`
  margin-left: 1rem;
`

const Header = () => {

  const { title } = useSiteMetadata() ;
  const { theme, toggleTheme, getNextTheme } = useContext(ThemeContext);

  return (
    <Nav>
      <Wrapper>

        <Brand>
          <Link to="/">
            <NavLogo width={"40"} />
            <SiteTitle>{ title }</SiteTitle>
          </Link>
        </Brand>

        <NavLinkWrapper>
          <NavLink activeClassName={activeClassName} to="/">Blog</NavLink>
          <NavLink activeClassName={activeClassName} to="/a-propos">À Propos</NavLink>
          <NavLink activeClassName={activeClassName} to="/contact">Contact</NavLink>
        </NavLinkWrapper>
          
        <CTA>
          <Button handleClick={toggleTheme}>
            { theme == "dark" ? <Sun /> : <Moon /> }
          </Button>
        </CTA>

      </Wrapper>
    </Nav>
  )
}

export default Header ;
