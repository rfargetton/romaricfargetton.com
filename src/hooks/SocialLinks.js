import { graphql, useStaticQuery } from 'gatsby' ;

const useSocialLinks = () => {
  const { allMarkdownRemark : links } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {frontmatter: {type: {eq: "social"}}}
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                link
              }
            }
          }
        }
      }
    `
  )

  return links.edges ;
}

export default useSocialLinks ;
