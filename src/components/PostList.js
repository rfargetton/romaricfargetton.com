import React from 'react' ;

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <div className="post-list">
      {posts.map(({node: post}) => {
        return (
          <div className="post" key={post.id}>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PostList ;
