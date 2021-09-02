import React from 'react'
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function ImageLink({ post, title, }) {
  const postThumb = getImage(post.frontmatter?.thumb)
  const {collection, slug} = post.fields

  return (  
    <li className='w-full relative'>
      <Link to={"/"+collection+slug} className="block rounded-md overflow-hidden" itemProp="url">
        {
          postThumb &&
          <GatsbyImage
            image={postThumb} alt={title} 
          />
        }
      </Link>
    </li>
  )
}

export default ImageLink