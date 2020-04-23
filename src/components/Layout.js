import React from "react" ;
import { Helmet } from "react-helmet" ;

import Header from "./Header.js" ;
import useSiteMetadata from "../hooks/SiteMetadata.js" ;
import Footer from "./Footer.js" ;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet
        defaultTitle={title + " | Frontend Developer " }
      >
        <html lang="fr" />
        <meta name="description" content={description} />
      </ Helmet>
      <Header />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout ;
