import React from 'react'
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Postlist({ post, title }) {
  const postThumb = getImage(post.frontmatter.thumb)
  console.log(postThumb)
  return (
    <li className="py-2">
      <Link to={post.fields.slug} itemProp="url">
        <article
          className="
            flex flex-col 
            overflow-hidden rounded
            hover:-translate-y-1 hover:shadow-lg
            transition duration-200
            group
          "
          itemScope
          itemType="http://schema.org/Article"
        >
          {
            postThumb && 
            <GatsbyImage 
              className="group-hover:opacity-80 transition"
              image={postThumb} alt={title} 
            />
          }
          <section className="p-5 pt-2">
            <div className="divide-x flex items-center mt-1 gap-1 text-xs text-gray-400">
              <span>{post.frontmatter.date}</span>
              <span className="pl-1">{post.frontmatter.dateFromNow}</span>
            </div>
            <h2 className="text-lg line-clamp-1 font-semibold" itemProp="headline">
              {title}
            </h2>
          </section>
        </article>
      </Link>
    </li>
  )
}

export default Postlist