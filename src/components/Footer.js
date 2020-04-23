import React from 'react' ;
import { Link } from 'gatsby' ;

import useSiteMetadata from '../hooks/SiteMetadata' ;
import useSocialLinks from '../hooks/SocialLinks' ;

const Footer = () => {
  const { title } = useSiteMetadata() ;
  const socialLinkEdges =  useSocialLinks() ;

  return (
    <footer>

      <div className="container">
        <div className="brand">
          <Link to="/">
            { title }
          </Link>
        </div>

        <div className="footer-navigation">
          <ul>
            <li><Link to="/">Projetcs</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <ul>

            {socialLinkEdges.map( ({node: link}) => (
              <li key={link.id}>
                <a href={link.frontmatter.link}>
                  {link.frontmatter.title}
                  </a>
              </li>
            ))}

          </ul>
        </div>

      </div>

    </footer>
  )
}

export default Footer ;
