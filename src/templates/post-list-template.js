import React from "react"
import { graphql } from "gatsby"

import Seo from "@/components/Partials/Seo"
import Layout from "@/components/Base/Layout"
import SideContent from "@/components/Base/SideContent";
import PostCard from "@/components/Posts/PostCard";
import Pagination from "@/components/Partials/Pagination";

const PostList = ({ data, pageContext, location }) => {
  const posts = data?.posts?.edges
  const listOfCollection = data?.listOfCollection?.nodes

  const seriesByCollection = listOfCollection.filter(series => 
    series?.fields.collection === pageContext?.collection
  )

  return (
    <Layout
      location={location}
      mainClass="pt-20 w-full p-5 lg:p-20"
    >
      <Seo title="HartDev - Posts" />
      <h1 className="text-2xl font-bold my-5 capitalize">
        {pageContext?.title} : 
      </h1>
      <div className="grid grid-cols-12 gap-10 w-full ">
        <main className="col-span-12 lg:col-span-8">
          {
            posts.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
                {posts?.map(post => {
                  const title = post?.node?.frontmatter?.title
                  return <PostCard post={post?.node} title={title} key={post?.node?.fields?.slug} />
                })}
              </ul>
            ) : (
              <div>Tidak Ada Posts</div>
            )
          }
          <Pagination pageContext={pageContext}/>
        </main>
        
        <SideContent 
          collection={posts[0]?.node?.fields?.collection} 
          lists={seriesByCollection}
          seriesSlug={"/"+ pageContext?.collection}
         />
      </div>
      
    </Layout>
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

    listOfCollection: allMdx(
      filter: {fields: {slug: {ne: "/"}}, frontmatter: {contentType: {eq: "list"}}}
    ) {
      nodes {
        fields {
          collection
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`