import React from 'react'
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Postlist({ post, title, withDescription = true, classes }) {
  const postThumb = getImage(post.frontmatter?.thumb)

  const {collection, slug} = post.fields

  return (
    <li className={`w-full ${classes}`} >
      <a href={"/"+collection+slug} itemProp="url">
        <article
          className="
            flex flex-col
            overflow-hidden rounded-md
            hover:-translate-y-1 hover:shadow-lg
            transition duration-200
            dark:text-gray-50
            group
          "
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="relative min-h-32 rounded-b-md overflow-hidden">
            {
              postThumb &&
              <GatsbyImage 
                className="group-hover:opacity-80 transition "
                image={postThumb} alt={title} 
              />
            }
            <h1 className="absolute rounded-tl-md pt-px bottom-0 right-0 bg-gray-700/80 rounded-sm text-white px-2">
              {collection.replace(/-/g, ' ')}
            </h1>
          </div>
          <section className="relative p-5 pt-2">
            <div className="divide-x dark:divide-gray-500 flex items-center mt-1 gap-1 text-xs text-gray-600 dark:text-gray-300">
              <span>{post?.frontmatter?.date}</span>
              <span className="pl-1">{post?.frontmatter?.dateFromNow}</span>
            </div>
            
            <h1 className="text-lg line-clamp-2 font-semibold mt-2" itemProp="headline">
              {title}
            </h1>
            { 
              withDescription &&
              post.frontmatter?.description &&
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mt-1">
                {post.frontmatter?.description}
              </p>
            }
            <ul className="mt-3 -ml-2 flex items-center text-sm gap-1 text-gray-600">
              {
                post.frontmatter.tags.map(tag => (
                  <li className="px-2 py-px bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-lg" key={tag}>
                    {tag}
                  </li>
                ))
              }
            </ul>
          </section>
        </article>
      </a>
    </li>
    
  )
}

export default Postlist