import React from "react" ;
import styled from "styled-components" ;
import { Layout, Terminal } from "react-feather" ;

import useServices from "../hooks/Services";
import List from "./List.js" ;

const Service = styled.li`
  text-align: center
`
const ServiceTitle = styled.h3`
  margin: 1rem 0;
`

const ServiceList = ({ columns }) => {

  const { dev, webdesign } = useServices();
  
  return (
    <List columns={columns}>
      <Service>
        <Layout 
          size={100}
          strokeWidth={1}
        />
        <ServiceTitle>{webdesign.frontmatter.title}</ServiceTitle>
        <div dangerouslySetInnerHTML={{ __html : webdesign.html }} />
      </Service>
      <Service>
        <Terminal 
          size={100}
          strokeWidth={1}
        />
        <ServiceTitle>{dev.frontmatter.title}</ServiceTitle>
        <div dangerouslySetInnerHTML={{ __html : dev.html }} />
      </Service>
    </List>
  )
}

export default ServiceList ;
