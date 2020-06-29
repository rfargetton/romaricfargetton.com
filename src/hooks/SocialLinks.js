import { graphql, useStaticQuery } from 'gatsby' ;

const useSocialLinks = () => {
  const links = useStaticQuery(
    graphql`
      query {
        github: markdownRemark(
          frontmatter: {title: {eq: "Github"}}
        ){
          frontmatter {
            title
            link
          }
        }
        linkedin: markdownRemark(
          frontmatter: {title: {eq: "Linkedin"}}
        ){
          frontmatter {
            title
            link
          }
        }
        email: markdownRemark(
          frontmatter: {title: {eq: "Email"}}
        ){
          frontmatter {
            title
            link
          }
        }
      }
    `
  )

  return links ;
}

export default useSocialLinks ;
