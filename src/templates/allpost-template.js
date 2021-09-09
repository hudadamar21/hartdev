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
      sort: {fields: fields___birthTime, order: ASC}
    ) {
      nodes {
        fields {
          slug
          collection
          birthTime(formatString: "DD MMMM YYYY", locale: "id-ID")
          birthTimeFromNow: birthTime(fromNow: true, locale: "id-ID")
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
          slug
          collection
          birthTime(formatString: "DD MMMM YYYY", locale: "id-ID")
          birthTimeFromNow: birthTime(fromNow: true, locale: "id-ID")
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