import React from 'react' ;
import Img from "gatsby-image" ;
import styled from "styled-components" ;
import { Link } from 'gatsby' ;
import { Eye, GitHub } from "react-feather";

import Button from "./Button.js" ;
import List from "./List.js" ;

const ProjectImg = styled(Img)`
`
const ProjectContent = styled.div`
  padding: 1rem;
  p {
    margin: 1rem 0;
  }
`
const Card = styled.li`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.backgroundHighlight};
  img {
    width: 100%;
  }
`
const Links = styled.div`
  padding: 1rem;
  display: flex;
  button {
    margin-right: 1rem;
  }
`

const ProjectList = ({ projects, columns }) => {
  return (
    <List columns={columns}>
      {projects.map(({node: project}) => {
        return (
          <Card key={project.id}>
            <ProjectImg fluid={project.frontmatter.featured_image.childImageSharp.fluid} />
            <ProjectContent>
              <h3>{project.frontmatter.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: project.html }} />
            </ProjectContent>
            <Links>
              {project.frontmatter.link &&
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
              }
              {project.frontmatter.repo &&
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
              }
            </Links>

          </Card>
        )
      })}
    </List>
  )
}

export default ProjectList ;
