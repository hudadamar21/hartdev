import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import SideContent from "../components/SideContent";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";

const PostList = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges
  
  const title = posts.map(post => post.node.frontmatter.category)[0]

  return (
    <Layout
      location={location}
      mainClass="pt-20 w-full p-5 lg:p-20"
    >
      <Seo title="All posts" />
      <h1 className="text-2xl font-bold my-5 capitalize">{title} : </h1>
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
  query PostList($skip: Int!, $limit: Int!, $category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip 
      limit: $limit
      filter: { frontmatter: { category: { eq: $category } } }
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