import React from 'react'
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Postlist({ post, title, withDescription = true }) {
  const postThumb = getImage(post.frontmatter?.thumb)

  const {collection, slug} = post.fields

  return (
    <li className="w-full">
      <Link to={"/"+collection+slug} itemProp="url">
        <article
          className="
            flex flex-col 
            overflow-hidden rounded-md
            hover:-translate-y-1 hover:shadow-lg
            transition duration-200
            group
          "
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="relative min-h-32 bg-gray-200 rounded-b-md overflow-hidden">
            {
              postThumb &&
              <GatsbyImage 
                className="group-hover:opacity-80 transition "
                image={postThumb} alt={title} 
              />
            }
            <h3 className="absolute rounded-tl-md pt-px bottom-0 right-0 bg-gray-700/80 rounded-sm text-white px-2">
              {collection.replaceAll('-', ' ')}
            </h3>
          </div>
          <section className="relative p-5 pt-2">
            <div className="divide-x flex items-center mt-1 gap-1 text-xs text-gray-400">
              <span>{post.frontmatter?.date}</span>
              <span className="pl-1">{post.frontmatter?.dateFromNow}</span>
            </div>
            
            <h2 className="text-lg line-clamp-2 font-semibold mt-2" itemProp="headline">
              {title}
            </h2>
            { 
              withDescription &&
              post.frontmatter?.description &&
              <p className="text-gray-600 text-sm line-clamp-3 mt-1">
                {post.frontmatter?.description}
              </p>
            }
            {/*<ul className="mt-3 -ml-2 flex items-center text-sm divide-x text-gray-400">
              {
                post.frontmatter.tags.map(tag => (
                  <li className="px-2" key={tag}>
                    {tag}
                  </li>
                ))
              }
            </ul>*/}
          </section>
        </article>
      </Link>
    </li>
  )
}

export default Postlist