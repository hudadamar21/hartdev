import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import loadable from "@loadable/component"

const ContentList = loadable(() => import("@/components/Container/ContentList")) 

const TutorialList = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fields: {
            collection: {eq: "tutorial"}, 
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

  return <ContentList posts={posts} title="Tutorial" href="/tutorial" />
}

export default TutorialList