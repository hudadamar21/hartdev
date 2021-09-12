import React from "react"
import { graphql } from "gatsby"
import Seo from "@/components/Partials/Seo"
import Layout  from "@/components/Base/Layout"
import SimpleCard  from "@/components/Posts/SimpleCard"
import Pagination  from "@/components/Partials/Pagination"

const PostList = ({ data, pageContext, location }) => {
  const posts = data?.allMdx?.nodes

  console.log(posts)

  const postList = posts?.map(post => {
    const title = post?.frontmatter?.title
    return (
      <div className="w-full" key={post?.fields?.slug}>
        <SimpleCard post={post} title={title} />
      </div>
    )
  })

  return (
    <Layout
        pageActive={pageContext?.collection}
        location={location}
        mainClass="w-full flex items-center flex-col"
      >
        <Seo title="HartDev - Posts" />
        <div className="w-full px-5 md:px-20 pt-20 pb-12">
          <div className="my-5 mb-10 py-4 border-l-8 pl-5 border-gray-600">
            <h1 className="font-display tracking-wide text-5xl font-bold mb-1 uppercase">
              {pageContext?.title}
            </h1>
            <p>{pageContext?.description}</p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {postList}
          </ul>
        </div>
        <nav className="flex items-center justify-center flex-col w-full">
          <Pagination pageContext={pageContext}/>
        </nav>
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
      sort: {fields: fields___birthTime, order: ASC}
    ) {
      nodes {
        fields {
          slug
          collection
        }
        frontmatter {
          title
          description
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