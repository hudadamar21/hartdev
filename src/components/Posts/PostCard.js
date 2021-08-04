import React from 'react'
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Postlist({ post, title, withDescription = true }) {
  const postThumb = getImage(post.frontmatter?.thumb)
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
            <div className="relative">
              <GatsbyImage 
                className="group-hover:opacity-80 transition"
                image={postThumb} alt={title} 
              />
              <ul className="absolute bottom-0 right-0 flex items-center gap-1 text-sm">
                <li className="bg-gray-700/90 rounded-sm text-white px-1">
                  tailwindcss
                </li>
                <li className="bg-gray-700/90 rounded-sm text-white px-1">
                  components
                </li>
              </ul>
            </div>
          }
          <section className="p-5 pt-2">
            <div className="divide-x flex items-center mt-1 gap-1 text-xs text-gray-400">
              <span>{post.frontmatter.date}</span>
              <span className="pl-1">{post.frontmatter.dateFromNow}</span>
            </div>
            <h2 className="text-xl line-clamp-1 font-semibold mt-1" itemProp="headline">
              {title}
            </h2>
            { 
              withDescription &&
              post.frontmatter.description &&
              <p className="text-gray-600 text-sm line-clamp-3 mt-1">
                {post.frontmatter.description}
              </p>
            }
          </section>
        </article>
      </Link>
    </li>
  )
}

export default Postlist