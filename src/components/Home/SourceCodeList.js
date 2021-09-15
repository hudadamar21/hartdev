import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import ContentList from "@/components/Container/ContentList"

const SourceCodeList = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fields: {
            collection: {eq: "source-code"}, 
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
  `)

  const posts = data?.allMdx?.nodes

  return <ContentList posts={posts} title="Source Code" href="/source-code" />
}

export default SourceCodeList