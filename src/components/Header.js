import React from 'react' ;
import { Link } from 'gatsby' ;

import useSiteMetadata from '../hooks/SiteMetadata' ;

const Header = () => {
  const { title } = useSiteMetadata() ;

  return (
    <nav>
      <div className="container">

        <div className="brand">
          <Link to="/">
            { title }
          </Link>
        </div>

        <div className="navigation">
          <ul>
            <li><Link to="/">Projetcs</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header ;
