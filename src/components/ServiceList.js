import React from "react" ;
import styled from "styled-components" ;
import { Layout, Terminal, Settings, Users } from "react-feather" ;

import useServices from "../hooks/Services";
import List from "./List.js" ;

const Service = styled.li`
  text-align: left;
  svg {
    stroke: ${props => props.theme.link};
  }
`
const ServiceTitle = styled.h3`
  margin: 1rem 0;
`

const ServiceList = ({ columns }) => {

  const { dev, webdesign, seo, formation } = useServices();
  
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
      <Service>
        <Settings 
          size={100}
          strokeWidth={1}
        />
        <ServiceTitle>{seo.frontmatter.title}</ServiceTitle>
        <div dangerouslySetInnerHTML={{ __html : seo.html }} />
      </Service>
      <Service>
        <Users 
          size={100}
          strokeWidth={1}
        />
        <ServiceTitle>{formation.frontmatter.title}</ServiceTitle>
        <div dangerouslySetInnerHTML={{ __html : formation.html }} />
      </Service>
    </List>
  )
}

export default ServiceList ;
