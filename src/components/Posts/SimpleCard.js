import React from 'react'
// import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function SimpleCard({ post, title, }) {
  const postThumb = getImage(post.frontmatter?.thumb)
  const {collection, slug} = post.fields

  return (  
    <li className='w-full relative hover:opacity-80 transition-opacity'>
      <a href={"/"+collection+slug} itemProp="url">
        <figure className="block rounded-md overflow-hidden">
          {
            postThumb &&
            <GatsbyImage
              image={postThumb} alt={title} 
            />
          }
        </figure>
        <h1 className="text-center font-semibold mt-1">{title}</h1>
      </a>
    </li>
  )
}

export default SimpleCard