import { graphql, useStaticQuery } from 'gatsby' ;

const useServices = () => {
  const services = useStaticQuery(
    graphql`
      query {
        webdesign: markdownRemark(
          frontmatter: {title: {eq: "Webdesign"}}
        ){
          html
          frontmatter {
            title
          }
        }
        dev: markdownRemark(
          frontmatter: {title: {eq: "Développement Web"}}
        ){
          html
          frontmatter {
            title
          }
        }
      }
    `
  )

  return services;
}

export default useServices ;

