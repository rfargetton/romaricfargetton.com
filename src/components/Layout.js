import React, { useState } from "react" ;
import { Helmet } from "react-helmet" ;

import useSiteMetadata from "../hooks/SiteMetadata.js" ;
import GlobalStyles from "../styles/Global.js" ;
import Header from "./Header.js" ;
import Footer from "./Footer.js" ;


const Layout = ({ children }) => {

  const { title, description } = useSiteMetadata();

  return (
    <div>
      <GlobalStyles />
      <Helmet
        titleTemplate={ " %s  — " + title }
        defaultTitle={title + " — Développeur Front-end " }
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
