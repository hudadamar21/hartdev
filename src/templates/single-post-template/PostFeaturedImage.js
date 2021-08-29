import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function PostFeaturedImage({image, title}) {
  const thumbImage = getImage(image)
  return thumbImage && <GatsbyImage image={thumbImage} alt={title} />
}

export default PostFeaturedImage