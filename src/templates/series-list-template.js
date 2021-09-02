import React, { lazy } from "react"
import { graphql } from "gatsby"
import Seo from "@/components/Partials/Seo"
import LazyLoad from "@/components/Partials/LazyLoad";

const Layout = lazy(() => import("@/components/Base/Layout"))
const ImageLink = lazy(() => import("@/components/Posts/ImageLink"))
const Pagination = lazy(() => import("@/components/Partials/Pagination"))

const PostList = ({ data, pageContext, location }) => {
  const posts = data.allMdx.edges

  const titleSlug = pageContext.title.split("-").join(" ")

  const postList = posts.map(post => {
    const title = post.node.frontmatter.title
    return (
      <div className="w-72" key={post.node.fields.slug}>
        <LazyLoad skeletonTemplate="post-card">
          <ImageLink post={post.node} title={title} />
        </LazyLoad>
      </div>
    )
  })

  return (
    <LazyLoad skeletonTemplate="page">
      <Layout
        pageActive={pageContext.collection}
        location={location}
        mainClass="w-full flex items-center flex-col"
      >
        <Seo title="HartDev - Posts" />
        <div className="w-full p-20 pb-12">
          <div className="my-5 mb-10 py-4 border-l-8 pl-5 border-gray-600">
            <h1 className="font-display tracking-wide text-5xl font-bold mb-1 uppercase">
              {titleSlug}
            </h1>
            <p>List tutorial pemrograman studi kasus bahasa indonesia </p>
          </div>
          <ul className="flex gap-6">
            {postList}
          </ul>
        </div>
        <main className="flex items-center justify-center flex-col w-full">
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