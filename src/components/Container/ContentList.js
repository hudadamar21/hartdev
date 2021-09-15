import React from 'react'
import loadable from '@loadable/component'

const SimpleCard = loadable(() => import("@/components/Posts/SimpleCard")) 

function ContentList({ posts, title, href }) {
  const blogList = posts?.map(post => {
    const postTitle = post?.frontmatter?.title
    return (
      <SimpleCard className="w-full" post={post} title={postTitle} key={post?.fields?.slug}/>
    )
  })

  return (
    <section className="pt-20 px-5 md:px-20">
      <div className="flex items-center gap-2 mb-3 md:mb-5">
        <h1 className="font-display tracking-widest text-xl md:text-3xl font-bold  uppercase">
          {title}
        </h1>
        <a href={href} aria-label="show-more" className="block text-gray-500 px-2 py-1 rounded hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogList}
      </ul>
    </section>
  )
}

export default ContentList