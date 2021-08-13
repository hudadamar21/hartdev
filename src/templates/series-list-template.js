import React from "react"
import { graphql } from "gatsby"

import Seo from "@/components/Partials/Seo"
import Layout from "@/components/Base/Layout"
import PostCard from "@/components/Posts/PostCard";
import Pagination from "@/components/Partials/Pagination";

const PostList = ({ data, pageContext, location }) => {
  const posts = data.allMdx.edges

  return (
    <Layout
      location={location}
      mainClass="w-full px-14 pt-20 flex items-center flex-col"
    >
      <Seo title="HartDev - Posts" />
      <h1 className="text-2xl font-bold my-5 capitalize">
        {pageContext.title.split("-").join(" ")}
      </h1>
      <main className="flex items-center justify-center flex-col w-full">
        <ul className="flex justify-center flex-wrap w-full">
          {posts.map(post => {
            const title = post.node.frontmatter.title
            return (
              <div className="w-1/3 p-8">
                <PostCard post={post.node} title={title} key={post.node.fields.slug} />
              </div>
            )
          })}
        </ul>
        <Pagination pageContext={pageContext}/>
      </main>
      
    </Layout>
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