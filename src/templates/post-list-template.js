import React from "react"
import { graphql } from "gatsby"
import PostList from "./layouts/post-list";

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
      sort: {fields: fields___birthTime, order: DESC}
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
      sort: {fields: fields___birthTime, order: DESC}
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