import React from "react"
import { graphql } from "gatsby"
import PostList from "./layouts/post-list";

const AllPost = (props) => {

  return <PostList {...props}/>
}

export default AllPost

export const pageQuery = graphql`
  query AllPost($skip: Int!, $limit: Int!) {
    posts: allMdx(
      skip: $skip 
      limit: $limit
      filter: {
        frontmatter: {
          contentType: {eq: "single"}
        }
      }
      sort: {fields: frontmatter___date, order: ASC}
    ) {
      nodes {
        fields {
          slug
          collection
        }
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          dateFromNow: date(fromNow: true, locale: "id-ID")
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