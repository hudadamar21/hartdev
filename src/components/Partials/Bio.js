import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)
    
  const author = data.site.siteMetadata?.author

  return (
    <div className="flex items-center gap-2">
      <StaticImage
        className="bio-avatar"
        formats={["AUTO", "WEBP", "AVIF"]}
        placeholder="tracedSVG"
        src="../../images/logo.png"
        width={25}
        height={25}
        quality={60}
        alt="Profile picture"
      />
      {
        author?.name && 
        <p className="text-sm text-gray-500">
          Written by <strong>{author.name}</strong>
        </p>
      }
    </div>
  )
}

export default Bio
