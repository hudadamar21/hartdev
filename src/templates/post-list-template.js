import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Partials/Seo"
import Layout from "../components/Base/Layout"
import SideContent from "../components/Base/SideContent";
import PostCard from "../components/Posts/PostCard";
import Pagination from "../components/Partials/Pagination";

const PostList = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges
  // const title = location.pathname

  return (
    <Layout
      location={location}
      mainClass="pt-20 w-full p-5 lg:p-20"
    >
      <Seo title="HartDev - Posts" />
      <h1 className="text-2xl font-bold my-5 capitalize">
        {pageContext.title} : 
      </h1>
      <div className="grid grid-cols-4 gap-10 w-full ">
        <main className="col-span-4 lg:col-span-3">
          <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
            {posts.map(post => {
              const title = post.node.frontmatter.title || post.node.fields.slug
              return <PostCard post={post.node} title={title} key={post.node.fields.slug} />
            })}
          </ul>
          <Pagination pageContext={pageContext}/>
        </main>
        <SideContent/>
      </div>
    </Layout>
  )
}

export default PostList

export const pageQuery = graphql`
  query PostList($skip: Int!, $limit: Int!, $filter: MarkdownRemarkFilterInput) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip 
      limit: $limit
      filter: $filter
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            dateFromNow: date(fromNow: true)
            title
            description
            category
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