const path = require("path") ;
const _ = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem") ;
const { fmImagesToRelative } = require('gatsby-remark-relative-images') ;

// Creating pages for each post and tag
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
    // Putting all tags in "allTags"
    const allTags = [];
    posts.forEach(( edge ) => {
      if(edge.node.frontmatter.tags) {
        allTags.push(...edge.node.frontmatter.tags) ;
      }
    });
    // Remove duplicates
    const uniqueTags = [];
    allTags.forEach((tag, index) => {
      if(allTags.indexOf(tag) == index){
        uniqueTags.push(tag);
      }
    });
    // Create a page for each tag in "tags" 
    console.log(`create ${uniqueTags.length} tag pages - ${uniqueTags.join(', ')}`);
    uniqueTags.forEach((tag) => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}`,
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
  fmImagesToRelative(node);

  if(node.internal.type === "MarkdownRemark"){
    const value = createFilePath({ node,  getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
