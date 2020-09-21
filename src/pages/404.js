import React from "react" ;

import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js" ;
import { PageHeader, HeaderTitle, HeaderIntro } from "../components/PageHeader.js";

const NotFound = () => {

  return (
    <Layout>

      <Seo 
        title={"404"}
      />
      
      <PageHeader>
        <HeaderTitle>
          {"404"}
        </HeaderTitle>
        <HeaderIntro>
          {"Désolé ! Je n'ai pas réussi à trouver ce que vous cherchez. Il se peut que l'URL soir incorrect ou que ce contenu ait été suprrimé."}
        </HeaderIntro>
      </PageHeader>

    </Layout>
  )
}

export default NotFound ;