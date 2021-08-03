import * as React from "react"
import { Link } from "gatsby";

import Bio from "../components/Bio"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import PostCard from "../components/PostCard";

const ContentList = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges
  console.log("page context", pageContext)

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No posts found.
        </p>
      </Layout>
    )
  }

  const paginationClass = `flex items-center gap-2 text-lg font-semibold hover:bg-gray-100 px-4 py-1.5`

  const ArrowLeft = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>

  const ArrowRight = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>

  return (
    <Layout
      location={location}
      mainClass="w-full p-5 lg:p-20"
    >
      <Seo title="All posts" />
      <div className="grid grid-cols-4 gap-10 w-full ">
        <main className="col-span-4 lg:col-span-3">
          <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
            {posts.map(post => {
              const title = post.node.frontmatter.title || post.node.fields.slug
              return <PostCard post={post.node} title={title} key={post.node.fields.slug} />
            })}
          </ul>
          <div className="flex gap-3 mt-10">
            <Link
              className={`
                ${paginationClass} 
                ${!pageContext.previousPagePath ? 'opacity-50 pointer-events-none' : ''}
              `}
              to={pageContext.previousPagePath}
            >
              {ArrowLeft} Prev
            </Link>
            <Link
              className={`
                ${paginationClass} 
                ${!pageContext.nextPagePath ? 'opacity-50 pointer-events-none' : ''}
              `}
              to={pageContext.nextPagePath}
            >
              Next {ArrowRight}
            </Link>
          </div>
        </main>
        <aside className="sticky top-20 left-0 bg-red-500 col-span-4 lg:col-span-1 h-64">

        </aside>
      </div>
    </Layout>
  )
}

export default ContentList