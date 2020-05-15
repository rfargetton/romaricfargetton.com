import React from 'react' ;
import { Link } from 'gatsby' ;

import Logo from './Logo.js' ;
import useSiteMetadata from '../hooks/SiteMetadata' ;

const Header = () => {
  const { title } = useSiteMetadata() ;

  return (
    <nav>
      <div className="container">

        <div className="brand">
          <Link to="/">
            <Logo width={"40"} />
            { title }
          </Link>
        </div>

        <div className="navigation">
          <Link to="/">Blog</Link>
          <Link to="/a-propos">À Propos</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  )
}

export default Header ;
