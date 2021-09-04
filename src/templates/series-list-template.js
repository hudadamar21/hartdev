import React, { lazy } from "react"
import { graphql } from "gatsby"
import Seo from "@/components/Partials/Seo"
import LazyLoad from "@/components/Partials/LazyLoad";

const Layout = lazy(() => import("@/components/Base/Layout"))
const SimpleCard = lazy(() => import("@/components/Posts/SimpleCard"))
const Pagination = lazy(() => import("@/components/Partials/Pagination"))

const PostList = ({ data, pageContext, location }) => {
  const posts = data.allMdx.edges

  const titleSlug = pageContext.title.split("-").join(" ")

  const postList = posts.map(post => {
    const title = post.node.frontmatter.title
    return (
      <div className="w-full" key={post.node.fields.slug}>
        <LazyLoad skeletonTemplate="post-card">
          <SimpleCard post={post.node} title={title} />
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
        <div className="w-full px-5 md:px-20 pt-20 pb-12">
          <div className="my-5 mb-10 py-4 border-l-8 pl-5 border-gray-600">
            <h1 className="font-display tracking-wide text-5xl font-bold mb-1 uppercase">
              {titleSlug}
            </h1>
            <p>List tutorial pemrograman studi kasus bahasa indonesia </p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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
  query SeriesList($skip: Int!, $limit: Int!, $collection: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip 
      limit: $limit
      filter: {
        fields: {
          collection: {eq: $collection}, 
          slug: {ne: "/"}
        }, 
        frontmatter: {contentType: {eq: "list"}}
      }
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