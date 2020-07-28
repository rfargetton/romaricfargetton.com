import React from 'react' ;
import Img from "gatsby-image" ;
import styled from "styled-components" ;
import { Eye, GitHub } from "react-feather";

import Button from "./Button.js" ;
import List from "./List.js" ;
import Card from "./Card.js" ;

const ProjectImg = styled(Img)`
  flex: 0 0 35%;
`
const ProjectContent = styled.div`
  padding: 2rem;
  p {
    margin: 1rem 0;
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`
const ProjectCard = styled(Card)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: initial;
  }
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
          <li key={project.id}>
            <ProjectCard>
              <ProjectImg fluid={project.frontmatter.featured_image.childImageSharp.fluid} />
              <ProjectContent>
                <h3>{project.frontmatter.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: project.html }} />
                <Links>
                  {project.frontmatter.link &&
                    <Button>
                      <a 
                        href={project.frontmatter.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Eye />
                        <span>Site</span>
                      </a>
                    </Button>
                  }
                  {project.frontmatter.repo &&
                    <Button>
                      <a 
                        href={project.frontmatter.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHub />
                        <span>Code</span>
                      </a>
                    </Button>
                  }
                </Links>
              </ProjectContent>
            </ProjectCard>
          </li>
        )
      })}
    </List>
  )
}

export default ProjectList ;
