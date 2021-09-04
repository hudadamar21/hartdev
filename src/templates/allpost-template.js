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
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip 
      limit: $limit
      filter: {
        frontmatter: {
          contentType: {eq: "single"}
        }
      }
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