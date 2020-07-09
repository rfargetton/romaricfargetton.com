import React from 'react' ;
import Img from "gatsby-image" ;
import styled from "styled-components" ;
import { Link } from 'gatsby' ;
import { Eye, GitHub } from "react-feather";

import Button from "./Button.js" ;
import List from "./List.js" ;

const ProjectImg = styled(Img)`
  border-radius: 8px;
`
const ProjectTitle = styled.h3`
  margin: 2rem 0;
`
const Project = styled.li`
`
const Links = styled.div`
  display: flex;
  margin-top: 2rem;
  button {
    margin-right: 1rem;
  }
`

const ProjectList = ({ projects, columns }) => {
  return (
    <List columns={columns}>
      {projects.map(({node: project}) => {
        return (
          <Project key={project.id}>
            <ProjectImg fluid={project.frontmatter.featured_image.childImageSharp.fluid} />
            <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
            <Links>
              <Button>
                <a 
                  href={project.frontmatter.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Eye />
                  <span>Demo</span>
                </a>
              </Button>
              <Button>
                <a 
                  href={project.frontmatter.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub />
                  <span>Repo</span>
                </a>
              </Button>
            </Links>

          </Project>
        )
      })}
    </List>
  )
}

export default ProjectList ;
