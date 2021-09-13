import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Seo from "@/components/Layout/Seo"
import Layout  from "@/layouts/Main"
import SimpleCard  from "@/components/Posts/SimpleCard"

const PostList = ({ data, pageContext, location }) => {

  const posts = data?.allMdx?.nodes

  const postList = posts?.map(post => (
    <div className="w-full" key={post?.fields?.slug}>
      <SimpleCard 
        post={post} 
        title={post?.frontmatter?.title} 
      />
    </div>
  ))

  return (
    <Layout
      pageActive={pageContext?.collection}
      location={location}
      mainClass="w-full flex items-center flex-col"
    >
      <Seo title="HartDev - Posts" />
      <div className="grid grid-cols-4 gap-10 w-full px-5 md:px-20 pt-20">
        <div className="col-span-4 lg:col-span-3">
          <div className="my-5 mb-10 py-4 border-l-8 pl-5 border-gray-600">
            <h1 className="font-display tracking-wide text-5xl font-bold mb-1 uppercase">
              {pageContext?.title}
            </h1>
            <p>{pageContext?.description}</p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {postList}
          </ul>
        </div>
        <div className="col-span-4 lg:col-span-1 my-5">
            <div id="container-c6cb249243f68f49699f7911e0405f8d"></div> 
          </div>
      </div>
    </Layout>
  )
}

export default PostList

export const pageQuery = graphql`
  query SeriesList($skip: Int!, $limit: Int!, $collection: String!) {
    allMdx(
      skip: $skip 
      limit: $limit
      filter: {
        fields: {
          collection: {eq: $collection}, 
          slug: {ne: "/"}
        }, 
        frontmatter: {contentType: {eq: "list"}}
      }
      sort: {fields: frontmatter___date order: DESC}
    ) {
      nodes {
        fields {
          slug
          collection
        }
        frontmatter {
          title
          description
          date(formatString: "DD MMMM YYYY")
          dateFromNow: date(fromNow: true, locale: "id-ID")
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