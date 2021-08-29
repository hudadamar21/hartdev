import React, { lazy } from "react"
import { graphql } from "gatsby"
import Seo from "@/components/Partials/Seo"
import LazyLoad from "@/components/Partials/LazyLoad"

const Layout = lazy(() => import("@/components/Base/Layout"))
const PostCard = lazy(() => import("@/components/Posts/PostCard"))
const Pagination = lazy(() => import("@/components/Partials/Pagination"))
const SideContent = lazy(() => import("@/components/Base/SideContent"))

const PostList = ({ data, pageContext, location }) => {
  const posts = data?.posts?.nodes
  const listOfCollection = data?.listOfCollection?.nodes

  const seriesName = posts.map(post => post?.frontmatter?.series)[0]

  const seriesByCollection = listOfCollection.filter(series => 
    series?.fields.collection === pageContext?.collection
    && series?.frontmatter?.title !== seriesName
  )
  
  const postList = posts?.map(post => (
    <LazyLoad skeletonTemplate="post-card">
      <PostCard 
        post={post} 
        title={post?.frontmatter?.title} 
      />
    </LazyLoad>
  ))

  return (
    <LazyLoad skeletonTemplate="page">
      <Layout
        pageActive={pageContext?.collection}
        location={location}
        mainClass="pt-20 w-full p-0 lg:p-20"
      >
        <Seo title="HartDev - Posts" />
        
        <div className="grid grid-cols-12 gap-10 w-full ">
          <main className="col-span-12 lg:col-span-8 p-3 lg:p-0">
            <h1 className="text-2xl text-center font-bold my-5 uppercase px-3 pb-5">
              {pageContext?.title} 
            </h1>
            {
              posts.length > 0 
                ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
                      {postList}
                    </ul>
                  ) 
                : <div>Tidak Ada Posts</div>
            }
            <LazyLoad skeletonTemplate="box">
              <Pagination pageContext={pageContext}/>
            </LazyLoad>
          </main>
          <LazyLoad skeletonTemplate="big-box">
            <SideContent
              title="Another Series"
              collection={posts[0]?.fields?.collection} 
              lists={seriesByCollection}
              seriesSlug={"/"+ pageContext?.collection}
              contentType="list"
            />
          </LazyLoad>
        </div>
        
      </Layout>
    </LazyLoad>
  )
}

export default PostList

export const pageQuery = graphql`
  query PostList($skip: Int!, $limit: Int!, $filter: MdxFilterInput) {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip 
      limit: $limit
      filter: $filter
    ) {
      nodes {
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

    listOfCollection: allMdx(
      filter: {
        fields: {slug: {ne: "/"}}, 
        frontmatter: {contentType: {eq: "list"}}
      }
    ) {
      nodes {
        fields {
          collection
          slug
        }
        frontmatter {
          title
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
`