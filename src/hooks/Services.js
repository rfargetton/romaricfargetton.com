import { graphql, useStaticQuery } from 'gatsby' ;

const useServices = () => {
  const services = useStaticQuery(
    graphql`
      query {
        webdesign: markdownRemark(
          frontmatter: {title: {eq: "Webdesign et ergonomie"}}
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
        seo: markdownRemark(
          frontmatter: {title: {eq: "SEO et performance"}}
        ){
          html
          frontmatter {
            title
          }
        }
        formation: markdownRemark(
          frontmatter: {title: {eq: "Formation et conseil"}}
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

