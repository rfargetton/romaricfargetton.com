const path = require("path") ;
const { createFilePath } = require("gatsby-source-filesystem") ;

// Creating pages for each post
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions 
  // Request
  return graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "blog"}}}
      ){
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
  `).then( result => {
    // Error Handling
    if(result.errors){
      result.errors.forEach( e => console.log(e.toString()));
      return Promise.reject(result.errors);
    }

    // Page Creation
    result.data.allMarkdownRemark.edges.map(({node}) => {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`src/templates/post.js`), 
        context: {
          id : node.id
        }, 
      })
    })
  })
}

// creating node field for slug
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions ;

  if(node.internal.type === "MarkdownRemark"){
    const value = createFilePath({ node,  getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
