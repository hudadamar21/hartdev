import React, { lazy } from "react"
import { graphql } from "gatsby"
import Seo from "@/components/Partials/Seo"
import LazyLoad from "@/components/Partials/LazyLoad";

const Layout = lazy(() => import("@/components/Base/Layout"))
const PostCard = lazy(() => import("@/components/Posts/PostCard"))
const Pagination = lazy(() => import("@/components/Partials/Pagination"))

const PostList = ({ data, pageContext, location }) => {
  const posts = data.allMdx.edges

  const titleSlug = pageContext.title.split("-").join(" ")

  const postList = posts.map(post => {
    const title = post.node.frontmatter.title
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 p-0 md:p-5 lg:p-8" key={post.node.fields.slug}>
        <LazyLoad skeletonTemplate="post-card">
          <PostCard post={post.node} title={title} classes="mb-5" />
        </LazyLoad>
      </div>
    )
  })

  return (
    <LazyLoad skeletonTemplate="page">
      <Layout
        pageActive={pageContext.collection}
        location={location}
        mainClass="w-full px-14 pt-20 flex items-center flex-col"
      >
        <Seo title="HartDev - Posts" />
        <h1 className="text-2xl font-bold my-5 capitalize">
          {titleSlug}
        </h1>
        <main className="flex items-center justify-center flex-col w-full">
          <ul className="flex justify-center flex-wrap w-full">
            {postList}
          </ul>
          <LazyLoad skeletonTemplate="box">
            <Pagination pageContext={pageContext}/>
          </LazyLoad>
        </main>
        
      </Layout>
    </LazyLoad>
  )
}

export default PostList

export const pageQuery = graphql`
  query SeriesList($skip: Int!, $limit: Int!, $filter: MdxFilterInput) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip 
      limit: $limit
      filter: $filter
    ) {
      edges {
        node {
          fields {
            slug
            collection
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            dateFromNow: date(fromNow: true)
            title
            description
            category
            tags
            series
            contentType
            thumb {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`