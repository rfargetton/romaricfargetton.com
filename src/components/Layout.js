import React, { useState } from "react" ;

import GlobalStyles from "../styles/Global.js" ;
import Header from "./Header.js" ;
import Footer from "./Footer.js" ;


const Layout = ({ children }) => {

  return (
    <div>
      <GlobalStyles />
      <Header />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout ;
