import React from "react" ;
import { Link } from 'gatsby' ;

const PostTags = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map(tag => (
          <Link 
            key={tag} 
            to={`/tags/${tag}/`}
          >
            {tag}
          </Link>
      ))}
    </div>
  )
}

export default PostTags ;
