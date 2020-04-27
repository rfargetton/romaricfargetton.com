import React from 'react' ;
import { Link, graphql } from 'gatsby' ;

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="post-list">
      {posts.map(({node: post}) => {
        return (
          <div className="post" key={post.id}>
            <Link to={post.fields.slug}> 
              <h3>{post.frontmatter.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default PostList ;
