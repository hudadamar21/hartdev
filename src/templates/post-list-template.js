import * as React from "react"
import { graphql } from "gatsby"

import ContentList from "../components/ContentList"

const PostList = ({ data, pageContext, location }) => {
  console.log(data)
  return <ContentList data={data} pageContext={pageContext} location={location} />
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            dateFromNow: date(fromNow: true)
            title
            description
            thumb {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  transformOptions: {fit: COVER}
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