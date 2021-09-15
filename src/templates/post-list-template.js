import React from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"

const PostList = loadable(() => import("@/templates/layouts/post-list"))

const PostListTemplate = (props) => {
  return <PostList {...props}/>
}

export default PostListTemplate

export const pageQuery = graphql`
  query PostList($skip: Int!, $limit: Int!, $title: String!) {
    posts: allMdx(
      skip: $skip 
      limit: $limit
      filter: {
        frontmatter: {
          series: {eq: $title}
        }
      }
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        fields {
          slug
          collection
        }
        frontmatter {
          date(formatString: "DD MMMM YYYY")
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

    mdx(
      frontmatter: {
        title: {eq: $title}
      }
    ) {
      frontmatter {
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

    listOfCollection: allMdx(
      filter: {
        fields: {slug: {ne: "/"}}, 
        frontmatter: {contentType: {eq: "list"}}
      }
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        fields {
          slug
          collection
        }
        frontmatter {
          title
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