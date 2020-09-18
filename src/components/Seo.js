import React from "react";
import { Helmet } from "react-helmet" ;

import useSiteMetadata from "../hooks/SiteMetadata.js" ;

const Seo = ({ title, description, image }) => {

  const { defaultTitle, defaultDescription, defaultImage, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription ,
    image: `${siteUrl}${image || defaultImage}`
  }


  return (
    <React.Fragment>
      <Helmet
        titleTemplate={ " %s  — " + defaultTitle }
        defaultTitle={"Romaric Fargetton — Développeur Front-end | Designer | Formateur "}
        title={title}
      >
        <html lang="fr" />
        <meta name="description" content={seo.description} />
        
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={siteUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </ Helmet>
    </React.Fragment>
  )

}

export default Seo ;