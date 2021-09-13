import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import ContentList from "@/components/Container/ContentList"

const BlogList = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          fields: {
            collection: {eq: "blog"}, 
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
  `)

  const posts = data?.allMdx?.nodes

  return <ContentList posts={posts} title="Blog" id="blog" />
}

export default BlogList