import React from 'react'
import SimpleCard  from "@/components/Posts/SimpleCard"

function ContentList({ posts, title, id }) {
  const blogList = posts?.map(post => {
    const postTitle = post?.frontmatter?.title
    return (
      <div className="w-full" key={post?.fields?.slug}>
        <SimpleCard post={post} title={postTitle} />
      </div>
    )
  })

  return (
    <section id={id} className="pb-20 px-5 md:px-20">
      <h1 id="latest-posts" className="font-display tracking-widest justify-self-start text-xl md:text-3xl font-bold mb-3 md:mb-5 uppercase">
        {title}
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {blogList}
      </ul>
    </section>
  )
}

export default ContentList