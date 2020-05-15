import React from "react" ;
import _ from "lodash" ;
import { Link } from 'gatsby' ;

const PostTags = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map(tag => (
          <Link 
            key={tag} 
            to={`/tags/${_.kebabCase(tag)}/`}
          >
            {tag}
          </Link>
      ))}
    </div>
  )
}

export default PostTags ;
