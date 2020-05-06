const path = require("path") ;
const { createFilePath } = require("gatsby-source-filesystem") ;

// Creating pages for each post
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions ;
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
            tags 
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

    const posts = result.data.allMarkdownRemark.edges ;
    // Post Page Creation
    posts.forEach((edge) => {
      createPage({
        path: `${edge.node.fields.slug}`,
        component: path.resolve(`src/templates/post.js`), 
        context: {
          id : edge.node.id
        } 
      })
    })
    // Iterate through each post
    // Putting all tags in 'tags'
    const tags = [];
    posts.forEach(( edge ) => {
      if(edge.node.frontmatter.tags) {
        tags.push(...edge.node.frontmatter.tags) ;
      }
    });
    // Remove duplicates
    const cleanTags = [];
    tags.forEach((tag, index) => {
      if(tags.indexOf(tag) == index){
        cleanTags.push(tag);
      }
    });
    // Tag Page Creation
    console.log(cleanTags);
    cleanTags.forEach((tag) => {
      createPage({
        path: `/tags/${tag}`,
        component: path.resolve(`src/templates/tag.js`), 
        context: {
          tag
        } 
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
