import { graphql, useStaticQuery } from 'gatsby' ;

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title,
            defaultDescription: description,
            defaultImage: image,
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata ;
};

export default useSiteMetadata ;
