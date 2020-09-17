import React, { useState } from "react" ;
import { Helmet } from "react-helmet" ;

import useSiteMetadata from "../hooks/SiteMetadata.js" ;
import GlobalStyles from "../styles/Global.js" ;
import Header from "./Header.js" ;
import Footer from "./Footer.js" ;
import avatar from "../img/avatar-1.jpg";


const Layout = ({ children }) => {

  const { title, description, siteUrl } = useSiteMetadata();

  return (
    <div>
      <GlobalStyles />
      <Helmet
        titleTemplate={ " %s  — " + title }
        defaultTitle={title + " — Développeur Front-end " }
      >
        <html lang="fr" />
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={avatar} />
        <meta property="og:url" content={siteUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={avatar} />
      </ Helmet>
      <Header />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout ;
