import React from "react" ;
import { Helmet } from "react-helmet" ;
import useSiteMetadata from "./SiteMetadata.js" ;

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
      <main>{ children }</main>
    </div>
  )
}

export default Layout ;
